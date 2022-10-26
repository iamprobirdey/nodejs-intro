const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, { "Content-Type" : "text/html" });

        fs.readFile('pages/home.html', 'utf8' , (err, data) => {
            if(err) throw err;

            res.write(data);

            res.end();
        });
    }
    else if(req.url === '/about'){
        res.writeHead(200,{ "Content-Type" : 'text/html' });
        fs.readFile('pages/about.html', 'utf8', (err, data) => {
            if(err) throw err;

            res.write(data);

            res.end();
        });
    }else if(req.url === '/create-file'){
        res.writeHead(200, { 'Content-Type' : 'text/html' });

        const content = '<h4> This is temp data</h4> \n';

        for(let i = 0; i <= 100; i++){
            fs.appendFile('temp/temp.html', content, err => {
                if(err) throw err;
            });
        }
        res.write('I am writting data');

        res.end();

    }
    else{
        res.writeHead(404, {
            'Content-Type' : 'text/html'
        });
        fs.readFile(('pages/404.html'), (err, data) => {
            if(err) throw err;

            res.write(data);

            res.end(); 
        })
    }
});


console.log(`Server is running on http://localhost:3000`);

server.listen(3000);