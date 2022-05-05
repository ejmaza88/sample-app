FROM python:3.9.12-slim-buster

RUN apt update && \
    apt upgrade -y && \
    apt install -y \
    vim \
    zsh \
    python3-cffi \
    python3-pip \
    python3-setuptools \
    python3-wheel

RUN mkdir -p /sample-app

WORKDIR /sample-app

COPY requirements.txt requirements.txt

COPY ./ /sample-app/

RUN pip install -U pip
RUN pip install -r requirements.txt

CMD ["/bin/zsh"]

