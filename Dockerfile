FROM imbios/bun-node:18-slim AS base

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb*  ./

RUN bun install

COPY . .

CMD ["bun", "run", "dev", "--turbo"]