document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blog-list');
  
  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
      
      });
    })
  .catch(error => console.error('Error loading blog posts:', error));
});




