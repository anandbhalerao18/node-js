import http from 'http';

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.end('<h1>This is anand bhalerao</h1> <p>hey this is my node js server</p>');
    }
    else if (req.url == '/about') {
        res.end('<h1>This is aabout page</h1> <p>byeee byeee</p>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>The page was not found on server</h1> <p>byeee byeee</p>');
    }
});

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});