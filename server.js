var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(8000, '0.0.0.0').listen(8000, '::');


console.log('> http server has started on port 8000');