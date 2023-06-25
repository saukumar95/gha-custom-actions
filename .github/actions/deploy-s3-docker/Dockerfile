FROM python:3

COPY requirement.txt /requirement.txt

RUN pip intall -r requirement.txt

COPY deployment.py /deployment.py

CMD [ "python", "/deployment.py" ]