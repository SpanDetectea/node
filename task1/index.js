const http = require('http');
let cntMain = 0;
let cntAbout = 0;
let cntPageNotFouned = 0;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
        res.end(`<div>
                    <p>Вы загрузили страницу ${++cntMain}раз</p>
                    <a href="/about">About</a>
                </div>
            `)
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
        res.end(`<div>
                    <p>Вы загрузили страницу ${++cntAbout}раз</p>
                    <a href="/">Main page</a>
                </div>`)
    } else if (req.url === '/favicon.ico') {
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
        res.end(`<div>
                    <p>PAge not founded</p>
                    <p>Вы загрузили страницу ${++cntPageNotFouned}раз</p>
                </div>`)
    }
});
server.listen(3000)
