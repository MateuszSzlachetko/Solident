FROM node:20-alpine3.19
WORKDIR /usr/src/app
COPY ./dist/ssr/ ./
EXPOSE 4000
CMD [ "node", "server/server.mjs" ]
