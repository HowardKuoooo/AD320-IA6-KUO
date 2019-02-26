var http = require('http');

var URL = process.argv[2];

http.get(URL, function(request) {
  request.setEncoding("utf8");
  request.on("data", function(data) {
    console.log(data);
  });
});