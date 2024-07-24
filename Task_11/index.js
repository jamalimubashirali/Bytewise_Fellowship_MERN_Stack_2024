const express = require('express');

const app  = express();

app.listen(8000, () => console.log("Server is running on port 8000"));

posts = [
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

app.get('/api/posts', (req, res) =>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0,limit));
    }
    else{
        res.json(posts);
    }
})


app.get('/api/posts/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const post = posts.filter((post)=> post.id === id);
    res.json(post);
})