const output = document.querySelector('#output');
const getPostBtn = document.querySelector('#get-posts');
const addPostForm = document.querySelector('#add-post-form')


const getPosts = async () => {
    try {
        const res = await fetch('http://localhost:8000/api/posts');

        if(!res.ok){
        throw new Error("Problem has occured in fetching posts");
        }

        const posts = await res.json();
        output.innerHTML = '';
        posts.forEach((post) => {
            const postEl = document.createElement('p');
            postEl.textContent = post.name;
            output.appendChild(postEl);
        })
    } catch (error) {
        console.log(error);
    }
}


const addPost = async (e) => {
    e.preventDefault();
    const formData = new FormData(addPostForm);
    try {
        const req = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: formData.get('name') }) // Create a JSON object
        });
        
        // ... rest of your code 

        if(!res.ok) {
            throw new Error ("Failed to add the post to URL");
        }

        const newPost  = await res.json();

        const postEl = document.createElement('p');
        postEl.textContent = newPost.name;
        output.appendChild(postEl);
        getPosts();
    } catch (error) {
        console.error();
    }
}

// Get-post EventListener

getPostBtn.addEventListener('click', getPosts);
addPostForm.addEventListener('submit', addPost);