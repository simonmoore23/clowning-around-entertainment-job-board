// delete created posts from apply page
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('post-id')) {
      const id = event.target.getAttribute('post-id');
  
      const response = await fetch(`/apply/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.render('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document.querySelector('.profileJobListing').addEventListener('click', delButtonHandler);