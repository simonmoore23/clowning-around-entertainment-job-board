// delete created posts from apply page
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('post-id')) {
    const id = event.target.getAttribute('post-id');

    const response = await fetch(`/apply/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Remove the parent job listing container after successful deletion
      const jobListingContainer = event.target.closest('.profileJobListing');
      jobListingContainer.remove();
      // Reload the page after the job is deleted
      window.location.reload();
    } else {
      alert('Failed to delete post');
    }
  }
};

// Attach event listener to each delete button within a job listing
document.querySelectorAll('.profileJobListing button').forEach((deleteButton) => {
  deleteButton.addEventListener('click', delButtonHandler);
});
