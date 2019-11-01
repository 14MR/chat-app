FROM node:8.16-alpine
COPY package-lock.json .
COPY package-json.json .
RUN npm ci
COPY . .

CMD node server.js
