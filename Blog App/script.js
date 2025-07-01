document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!title || !content) {
        alert('Please fill in both fields');
        return;
    }

    // Send POST request to backend server
    try {
        const response = await fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });

        if (response.ok) {
            // After successful post, reload posts from server
            displayPosts();
            document.getElementById('postForm').reset(); // clear form
        } else {
            alert('Failed to add post');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

async function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    try {
        const response = await fetch('http://localhost:5000/posts');
        const posts = await response.json();

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${post.id})">Delete</button>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

async function deletePost(id) {
    try {
        const response = await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            displayPosts(); // Refresh post list after deletion
        } else {
            alert('Failed to delete post');
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

// Initial load
displayPosts();
