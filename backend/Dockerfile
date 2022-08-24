FROM python:3.7-buster

RUN apt-get update && apt-get install git -y
RUN echo "git install"
RUN apt-get install vim -y

RUN pip install flask

WORKDIR /app

COPY . /app

EXPOSE 5000

CMD ["python", "server.py"]