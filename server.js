var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu on ipv4.')
  res.end();
}).listen(8000, '0.0.0.0');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu on ipv6.')
  res.end();
}).listen(8000, '[::]');


console.log('> http server has started on port 8000 (ipv4 and ipv6)!');