const postsContainer = document.getElementById('posts-container');
const loader = document.querySelector('.loading');
const filter = document.getElementById('filter');
let limit = 5;
let page = 1;   

// Fetch posts from API
async function getPosts() {
    const data = await res.json();
}