async function newFormHandler(event) {
  event.preventDefault();

  const jobTitle = document.querySelector('#jobTitle').value;
  const description = document.querySelector('#jobDescription').value;
  const salary = document.querySelector('#jobSalary').value;

  const response = await fetch(`/posts`, {
    method: 'POST',
    body: JSON.stringify({
      jobTitle,
      description,
      salary,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#jobPostForm')
  .addEventListener('submit', newFormHandler);
