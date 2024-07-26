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


router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const post = posts.filter((post)=> post.id === id);
    res.json(post);
})


export default router;