var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('This is the '); //write a response to the client
  res.write(req.url);
  res.end();
}).listen(8050);