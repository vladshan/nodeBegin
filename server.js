//get build-in http service
var http = require("http");

//module 'start' body 
function start() {
  function onRequest (request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Privet World!");
  response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
 
