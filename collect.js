var http = require('http');

var URL = process.argv[2];

http.get(URL, function(request) {
  var output = "";
  request.setEncoding("utf8");
  request.on("data", function(data) {
    output += data;
  });
  request.on("end", function() {
    console.log(output.length);
    console.log(output);
  });
});
