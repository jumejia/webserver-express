const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = { nomre: 'Julian', edad: 15, url: req.url }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8081);

console.log('escuchando puerto 8081');