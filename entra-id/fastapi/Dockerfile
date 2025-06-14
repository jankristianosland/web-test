FROM python:3.12-slim

WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
COPY ./app /code/app
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
CMD ["fastapi", "run", "/code/app/main.py", "--proxy-headers", "--port", "8000"]