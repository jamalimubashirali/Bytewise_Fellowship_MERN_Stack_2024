import {createServer} from 'http';
const PORT = 5000;


const data = [
    {id : 1, name : "Mubashir Ali"},
    {
        id : 2,
        name : "Shahid Hussain"
    },
    {
        id : 3,
        name : "Saddar Uddin"
    }
]


// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.url} ${req.method}`);
    next();
}


// jsonContentMiddleware

const jsonContentMiddleware = (req, res, next) =>{
    res.setHeader('Content-Type' , 'application/json');
    next();
}

// User handler GET

const userHandler = (req, res) => {

        res.write(JSON.stringify(data));
        res.end();
}


const notFoundhandler = (req, res) => {
    res.write(JSON.stringify({
        message : "User NOt Found"
    }));
    res.statusCode = 404;
    res.end();
}


const userByIDHandler = (req, res) => {
        const id = req.url.split('/')[3];
        const user = data.find((user) => user.id === parseInt(id));
        if(user) {
            res.write(JSON.stringify(user));
            res.end();
        }
    
}


// Route handler for POST

const postRequestHandler = (req, res) =>{
    let body= '';
    req.on('data', (chunk) =>{
        body+= chunk.toString();
    });
    req.on('end' , () => {
        const newUser = JSON.parse(body);
        data.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

const server = createServer((req, res) => {
    logger(req, res, () =>{
        jsonContentMiddleware (req, res, () =>{
            if(req.url === '/api/users' && req.method === 'GET'){
                userHandler(req, res);
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                userByIDHandler(req, res);
            } else if(req.url === '/api/users' && req.method === 'POST'){
                postRequestHandler(req, res)
            }
            else{
                res.write(JSON.stringify({
                    message : "User NOt Found"
                }));
                res.statusCode = 404;
                res.end();
            }
        })
    })
    
});

server.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
})