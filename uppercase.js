var http = require('http'),
    map = require('through2-map'),
    server;

server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});

server.listen(process.argv[2]);