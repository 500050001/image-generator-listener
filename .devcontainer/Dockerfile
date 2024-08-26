# Use Node.js base image
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:18

# Install global dependencies
RUN npm install -g npm

# Set the working directory
WORKDIR /workspace

# Copy project files
COPY . .

# Install project dependencies
RUN cd hardhat && npm install

# Expose port for local development
EXPOSE 8545
 