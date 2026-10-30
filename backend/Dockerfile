FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend.py .
EXPOSE 3001
CMD ["gunicorn", "--bind", "0.0.0.0:3001", "backend:app"]
