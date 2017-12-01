const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const rootpath = '/var/www/learning';
    const q = url.parse(req.url, true);
    var path = q.pathname;
    if(path == '/'){
        path = '/index.html';
    } else {
        if(path.endsWith('/')) {
            try {
                var folder = fs.readdirSync(rootpath + q.pathname);
                path += 'index.html';
            } catch (e) {
                path = path.slice(0, -1);
                path += '.html';
            }
        } else if(!path.endsWith('.html')) {
            path += '.html';
        }
    }
    fs.readFile(rootpath + path, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        var text = data.toString();
        text = text.replace('%%path%%', path);
        text = text.replace('%%month%%', q.query.month);
        text = text.replace('%%year%%', q.query.year);
        text = text.replace('%%day%%', q.query.day);
        res.write(text);
        return res.end();
    }); 
}).listen(6080);