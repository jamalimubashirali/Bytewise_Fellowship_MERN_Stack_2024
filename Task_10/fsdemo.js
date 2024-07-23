import fs from 'fs/promises';

// fs.readFile('./test.txt' , 'utf8' , (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// const data = fs.readFileSync('./test.txt', 'utf8',);
// console.log(data)

// fs.readFile('test.txt', 'utf8')
//     .then((data) => {
//         console.log(data);
//     }).catch(() => {
//         console.log(err);
//     }
// )


const readFile = async () => {
    try{
        const data = await fs.readFile ('test.txt', 'utf8');
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
}


const writeFile = async () => {
    try {
        const data = `I am Muabshir Ali and tomorrow is my Birthday`;
        await fs.writeFile('test.txt', data);
        console.log(`This file is written`);
    } catch (error) {
        throw error;
    }
}


const appendFile = async () => {
    try {
        const data = `\nThe Birthday data is 2nd August Friday`;
        await fs.appendFile('test.txt', data);
        console.log(`The file was successfully updated`);
    } catch (error) {
        throw error;
    }
}

writeFile();
appendFile();
readFile();

