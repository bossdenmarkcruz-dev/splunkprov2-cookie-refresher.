# SplunkProV2 Docker Configuration
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY server.js ./
COPY public ./public

# Expose port (Railway will override)
EXPOSE 5000

# Start application
CMD ["node", "server.js"]
