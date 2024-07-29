import color from 'colors';

const logger = (req, res, next) => {
    const reqColors = {
        'GET' : 'green',
        'POST' : 'blue',
        'PUT' : 'yellow',
        'DELETE' : 'red'
    }

    const reqColor = reqColors[req.method];

    console.log(`${req.method} ${req.protocol}//:${req.get('host')}${req.originalUrl}`[reqColor]);
    next();
}

export default logger;