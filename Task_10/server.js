import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';
import { throws } from 'assert';
const PORT = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const sever = http.createServer(async (req, res) => {
    let filePath;
    try {
        if(req.method === 'GET'){
            if(req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            }
            else {
                throw new Error("Page is not Found");
            }
        }
    } catch (error) {
                console.log(error)
    }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
})

sever.listen(PORT, () =>{
    console.log(`This server is running on port ${PORT}!`);
})