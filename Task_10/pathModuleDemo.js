import path from 'path';
import url from 'url';

const filename = url.fileURLToPath(import.meta.url);

console.log(path.basename(filename));
console.log(path.dirname(filename));
console.log(path.extname(filename));
console.log(path.parse(filename));
console.log(path.join('dir1', 'dir2', filename));
console.log(path.resolve('dir2', 'dir3', filename));