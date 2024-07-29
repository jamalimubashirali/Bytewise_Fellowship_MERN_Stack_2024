const notFound = (req, res, next)=> {
    const error = new Error('Api End Point not Found');
    error.status = 404;
    next(error);
}


export default notFound;