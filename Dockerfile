FROM node:20-alpine3.19
WORKDIR /usr/solident/app
COPY ./dist/solident/ ./
EXPOSE 4000
CMD [ "node", "server/server.mjs" ]
