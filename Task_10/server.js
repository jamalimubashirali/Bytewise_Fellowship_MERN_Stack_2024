import http from 'http';

const sever = http.createServer((req, res) => {
    res.writeHead(200 , {'Content-type' : 'text/html'});
    res.end(`<h1>Hello World </h1>`);
})

sever.listen(5000, () =>{
    console.log("This server is running on port 50001");
})