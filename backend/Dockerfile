FROM python:3.7-buster

RUN apt-get update && apt-get install git -y
RUN echo "git install"

RUN pip install flask

WORKDIR /app

COPY . /app

EXPOSE 80

CMD ["python", "server.py"]