FROM node:18.17.0-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . . 

# install packages

RUN npm install .

# build

RUN npm run build

EXPOSE 8080

# start

CMD ["npm", "run", "start"]