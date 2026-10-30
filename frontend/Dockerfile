FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY frontend.ts index.jade ./
RUN npm run build && npm prune --omit=dev
EXPOSE 3000
CMD ["node", "frontend.js"]
