async function editUserFormHandler(event) {
  event.preventDefault();

  // get the blog id from the url
  // const id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  // ];
  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  // if (event.target.hasAttribute('data-id')) {
  //   const id = event.target.getAttribute('data-id')

  // Get the post title and post text from the form
  // const username = document.querySelector('#').value;
  // const password = document.querySelector('#').value;
  const companyName = document.querySelector('#updateCompanyName').value;
  const postcode = document.querySelector('#updatePostcode').value;
  const email = document.querySelector('#updateEmail').value;
  const region = document.querySelector('#updateRegionName').value;
  const town = document.querySelector('#updateTownName').value;
  // use the update route to update the post
  const response = await fetch(`/profile/`, {
    method: 'PUT',
    body: JSON.stringify({
      companyName,
      postcode,
      town,
      region,
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // if the edit action is successful, redirect to the dashboard page, otherwise display the error
  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#profileFormEdit')
  .addEventListener('submit', editUserFormHandler);

//   function updateUserData() {
//     // Gather user input from the form
//     var username = document.getElementById('usernameInput').value;
//     var email = document.getElementById('emailInput').value;
//     var
//     // Prepare data to be sent to the server for updating user information
//     var userData = {
//         username: username,
//         email: email,
//         // ... other user-related fields
//     };

//     // Use Fetch API to send the data to the server for processing
//     fetch(`/user/${userId}/update`, {
//         method: 'PUT', // Assuming you use the PUT method for update
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the server's response, update the UI if necessary
//         console.log('User updated successfully:', data);
//         // Example: display a success message
//         alert('User updated successfully');
//     })
//     .catch(error => {
//         // Handle errors that may occur during the request
//         console.error('Error updating user:', error);
//         // Example: display an error message to the user
//         alert('Error updating user. Please try again.');
//     });
// }

// // Attach the updateUserData function to the form submission event
// document.getElementById('editUserForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     updateUserData();
// });
