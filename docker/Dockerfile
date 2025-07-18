# Stage 1: Build
FROM imbios/bun-node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN bun install

# Copy application files
COPY . .

# Build the application
RUN bun run build


# Stage 2: Production image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy built application from builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Change ownership of the app directory
RUN chown -R node:node /app

# Switch to non-root user
USER node

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]