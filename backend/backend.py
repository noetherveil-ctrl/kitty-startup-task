import requests
from flask import Flask


app = Flask(__name__)

@app.route("/cat_get")
def hello_world():
    try:
        resp = requests.get('https://api.thecatapi.com/v1/images/search', timeout=10)
        resp.raise_for_status()
        cat_json = resp.json()
    except (requests.RequestException, ValueError):
        return 'Не удалось получить котика', 502
    if not isinstance(cat_json, list) or not cat_json:
        return 'Не удалось получить котика', 502
    url = cat_json[0].get('url') if isinstance(cat_json[0], dict) else None
    if not isinstance(url, str) or not url:
        return 'Не удалось получить котика', 502
    return url

