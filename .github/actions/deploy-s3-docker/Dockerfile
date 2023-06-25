FROM python:3

COPY requirements.txt /requirements.txt

RUN pip intall -r requirement.txt

COPY deployment.py /deployment.py

CMD [ "python", "/deployment.py" ]