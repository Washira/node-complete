const fs = require('fs');

const requestHandler = (req, res) => {
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
    return req.on('end', () => { // This will be executed once the data has been fully read
      const parsedBody = Buffer.concat(body).toString(); // Concatenate all the chunks and convert to string
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => { // Write the message to a file
        res.statusCode = 302;
        res.setHeader('Location', '/'); // Redirect to the root
        return res.end();
      }); // Write the message to a file
    });
  }
};

// 1st way to export
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// };

// 2nd way to export
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// 3rd way to export
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';