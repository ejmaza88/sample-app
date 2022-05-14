FROM python:3.9.12-slim-buster AS django-base
RUN apt update \
    && apt upgrade -y \
    && apt install -y \
    python3-cffi \
    python3-pip \
    python3-setuptools \
    python3-wheel \
    && apt autoremove -y \
    && apt autoclean -y


FROM django-base AS django-builder
RUN mkdir -p /fakeproject
WORKDIR /fakeproject
RUN pip install -U pip
COPY requirements.txt requirements.txt
COPY ./fakeproject /fakeproject/
RUN pip install -r requirements.txt


FROM python:3.9.12-slim-buster AS django
COPY --from=django-builder /usr/local/lib/python3.9/site-packages/ /usr/local/lib/python3.9/site-packages/
COPY --from=django-builder /usr/local/bin/ /usr/local/bin/


FROM django AS django-server
WORKDIR /fakeproject
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

