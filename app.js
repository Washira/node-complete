const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  process.exit(); // Hard exit the process
});

server.listen(3000);