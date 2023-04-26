FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci

# We will use a bind mounts for the src and public folders so we can take advantage of nextjs hot reload during dev
COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json


CMD [ "npm", "run", "dev" ]