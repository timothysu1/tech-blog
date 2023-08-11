const newComment = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-input').value.trim();
  const id = event.target.getAttribute('data-id');

  if (content) {
    const response = await fetch(`/api/post/comment`, {
      method: 'POST',
      body: JSON.stringify({ content, id }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log('response:', response)
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to make comment');
    }
  }
}

document.querySelector('.new-comment').addEventListener('submit', newComment);