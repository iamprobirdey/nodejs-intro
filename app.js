const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Response written');
    res.end();
});


console.log(`Server is running on http://localhost:3000`);

server.listen(3000);