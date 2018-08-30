const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./views/index.html', (err, data) => {
        res.writeHead(200, {"Content-Type": 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
//http://localhost:8080