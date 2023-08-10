const newPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-comment').value.trim();
  console.log(JSON.stringify({ title, content }));
  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      header: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to make post')
    }
  }
}

document.querySelector('.new-post').addEventListener('submit', newPost);