FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install && npm install -g @quasar/cli
COPY . .
RUN quasar build -m ssr

FROM node:14-alpine as production-stage
WORKDIR /usr/share/www
COPY --from=build-stage /app/dist/ssr ./
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]