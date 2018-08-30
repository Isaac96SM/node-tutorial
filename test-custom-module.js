var http = require('http');
var dt = require('./modules/date');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.date() + " and the url request is: " + req.url);
    res.end();
}).listen(8080);
//http://localhost:8080/test