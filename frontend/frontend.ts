import * as express from "express";
import * as path from "path";

const app = express();
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'jade');

const port: number = 3000;
const backendUrl = "http://backend:3001";

app.get('/', async (req, res) => {
    try {
        const response = await fetch(`${backendUrl}/cat_get`, {
            signal: AbortSignal.timeout(15000)
        });
        if (!response.ok) throw new Error('Backend unavailable');
        const data = await response.text();
        res.render('index.jade', { title: "KITTY Frontend", cat_url: data });
    } catch {
        res.status(502).send('Не удалось загрузить котика. Попробуйте ещё раз.');
    }
});

app.listen(port, () => {
    console.log(`Frontend app listening on port ${port}`)
})
