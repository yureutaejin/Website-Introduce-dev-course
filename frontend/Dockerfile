FROM node:latest

RUN apt-get update && apt-get install git -y
RUN echo "git install"
RUN apt-get install vim -y

WORKDIR /home

EXPOSE 3000

CMD ["npm", "install"]