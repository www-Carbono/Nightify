FROM node:18-alpine


WORKDIR /backend

COPY . .

RUN npm install
RUN apt-get update
RUN apt-get install -y ffmpeg
RUN apt-get clean 
RUN apt-get install -y ffmpeg





CMD  ["npm" , "start"]