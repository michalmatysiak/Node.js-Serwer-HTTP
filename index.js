var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response) {
  response.setHeader("Content-Type", "charset=UTF-8");
  if (request.method === 'GET' && request.url === '/hello-word') {
    fs.readFile('./index.html', 'utf-8', function(err, data){
        response.write(data);
        response.end();
    });
  } else {
    response.statusCode = 404;
    fs.readFile('./error.png', function(err, png) {
      response.write(png);
      response.end();
    });
  }
});
server.listen(9000);



