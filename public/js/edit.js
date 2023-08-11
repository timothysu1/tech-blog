const editPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-comment').value.trim();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    if (title && content) {
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post')
      }
    }
  }
}

const deletePost = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
}

document.querySelector('.edit-post').addEventListener('submit', editPost);
document.querySelector('.delete-post').addEventListener('click', deletePost);