FROM node AS build

LABEL author="hieudoanm"
LABEL maintainer="hieumdoan@gmail.com"
LABEL version="1.0"

ARG node_token
ENV NODE_TOKEN=$node_token
ENV PORT=3000

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY . /home/node/app

RUN yarn install
RUN yarn build

FROM node:alpine

USER node

COPY --from=build /home/node/app ./

EXPOSE $PORT

CMD ["yarn", "start"]
