var server = require('http');
server.createServer(function(request,response) {
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end(new Date().toString());

}).listen(8989);