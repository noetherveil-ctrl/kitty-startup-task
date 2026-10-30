# Котики в мир

Запуск:

```bash
docker compose build
docker compose up -d
```

Сайт: http://localhost. API: http://localhost/api/cat_get.

Nginx принимает запросы на порту 80. Он передаёт страницу во frontend,
а запросы `/api/` — в backend. Frontend обращается к `backend:3001`.
Порты 3000 и 3001 наружу не опубликованы.

Проверка:

```bash
docker compose ps
curl http://localhost
curl http://localhost/api/cat_get
curl --connect-timeout 2 http://localhost:3001/cat_get
```

Последняя команда должна завершиться ошибкой подключения.
Для получения картинки нужен доступ к The Cat API.

Проверил сборку и запуск в Ubuntu 24.04. Страница и API отвечают,
порт 3001 с хоста недоступен. В `docker compose ps` опубликован только порт Nginx.

Остановка:

```bash
docker compose down
```
