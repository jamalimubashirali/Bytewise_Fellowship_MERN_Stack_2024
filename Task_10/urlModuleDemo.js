import url from 'url';

const urlString = 'https://google.com/?q=hello+world';

const urlObj = new URL(urlString);
console.log(urlObj);

console.log(urlObj.searchParams);
console.log(urlObj.searchParams.get('q'));
urlObj.searchParams.append('limit' , '5');
console.log(urlObj.searchParams);