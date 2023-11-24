FROM node:18-alpine

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package.json /frontend

RUN npm install

COPY . /frontend

RUN npm build

EXPOSE 3000

CMD [ "npm", "start" ]

# Super pesada +1GB