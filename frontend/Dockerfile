FROM node:latest

RUN apt-get update && apt-get install git -y
RUN echo "git install"
RUN apt-get install vim -y

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]