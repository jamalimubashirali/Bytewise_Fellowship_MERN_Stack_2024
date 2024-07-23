import crypto from 'crypto'

// const hash = crypto.createHash('sha256');
// hash.update('passward123');
// console.log(hash.digest('hex'));

// crypto.randomBytes(32, (err, buf) => {
//     try {
//         console.log(buf.toString('hex'));
//     } catch (err) {
//         console.log(err);
//     }
// })


const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const chiper = crypto.createCipheriv(algorithm, key, iv);
let encrypted = chiper.update('Hallo! wie gehts', 'utf8', 'hex');
encrypted += chiper.final('hex');
console.log(encrypted);

const dechiper = crypto.createDecipheriv(algorithm, key, iv);
let dencrypted = dechiper.update(encrypted, 'hex', 'utf8');
dencrypted += dechiper.final('utf8');
console.log(dencrypted);