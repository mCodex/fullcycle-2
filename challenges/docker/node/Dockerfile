FROM node:15-alpine

WORKDIR /usr/src/app

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash

RUN yarn global add @nestjs/cli && \
    yarn

EXPOSE 3000
