FROM node:20.12.2
WORKDIR /project

COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

ENTRYPOINT node /project/index.js