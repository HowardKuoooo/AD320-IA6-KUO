var fs = require('fs');
var http = require('http');
var file = process.argv[3];
var port = process.argv[2];

server = http.createServer(function(request, response) {
  fs.createReadStream(file).pipe(response);
});
server.listen(port);