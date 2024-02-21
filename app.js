const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); // Return to prevent the rest of the code from running
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { // This will be executed for every incoming data chunk
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => { // This will be executed once the data has been fully read
      const parsedBody = Buffer.concat(body).toString(); // Concatenate all the chunks and convert to string
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message); // Write the message to a file
      console.log('Message written to file!');
    });
    console.log('Redirecting...');
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/'); // Redirect to the root
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);