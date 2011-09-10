# hellonode! 
the simplest possible http server hello world example in node

## features

 - Example package.json
 - Starts up simple httpServer with helloworld

## installation

     git clone git://github.com/stolsma/hellonode.git
     cd hellonode
     node server.js

Now you should have a listening node.js http server running on port 8000

## the code

```javascript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(8000);


console.log('> http server has started on port 8000');
```