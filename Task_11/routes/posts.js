import express from 'express';
const router =  express.Router();

let posts = [
    {
        id : 1,
        name : "Post One"
    },
    {
        id : 2,
        name : "Post Two"
    },
    {
        id : 3,
        name : "Post Three"
    },
    {
        id : 4,
        name : "Post Four"
    }
]

router.get('/', (req, res) =>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0,limit));
    }
    else{
        res.json(posts);
    }
})


router.get('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);
    if(!post){
        const error = new Error (`The post with the id ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    res.status(201).json(post);
})


router.post('/', (req, res, next)=> {
    console.log(req.body);
    const newPost = {
        id : posts.length +1,
        name : req.body.name,
    }

    if(!newPost.name) {
        const error = new Error (`The post name not Found`);
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
    
})

router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id );

    if(!post){
        const error = new Error (`The post with the id ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    post.name = req.body.name;
    res.status(201).json(posts);
})

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id );

    if(!post){
        const error = new Error (`The post with the id ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(201).json(posts);
})

export default router;