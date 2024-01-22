// const { Script } = require('vm');

// drop down for filtering jobs by type. triggered when the selection changes with a hide feature on type of job chosen.
function filterJobs() {
  const jobTypeFilter = document.getElementById('jobType').value;
  const jobListings = document.querySelectorAll('.job-listing');

  jobListings.forEach((jobListing) => {
    const jobType = jobListing.classList[1]; // Assumes that the job type is the second class of the element

    if (jobTypeFilter === 'all' || jobTypeFilter === jobType) {
      jobListing.style.display = 'block';
    } else {
      jobListing.style.display = 'none';
    }
  });
}

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}
// document
//   .getElementById('loginForm')
//   .addEventListener('submit', loginFormHandler);
// document
//   .getElementById('registerForm')
//   .addEventListener('submit', signupFormHandler);

// function submitLogin() {
//   // Retrieve the entered username and password
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Replace the example credentials with your actual credentials check logic
//   const correctUsername = 'exampleUser';
//   const correctPassword = 'examplePassword';

//   // Check if the entered credentials match the correct credentials
//   if (username === correctUsername && password === correctPassword) {
//     console.log('Login successful');
//     // Perform actions after successful login, such as redirecting to another page
//     closeModal(); // Close the modal after successful login
//     // Update button visibility after login
//     updateButtonVisibility();
//   } else {
//     console.log('Invalid credentials');
//     // Handle invalid credentials, show an error message, etc.
//   }
// }

const openModal = () => {
  const loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'block';
};
function openRegisterModal() {
  const registerModal = document.getElementById('registerModal');
  registerModal.style.display = 'block';

  // Clear the input fields when opening the modal
  document.getElementById('regUsername').value = '';
  document.getElementById('regPassword').value = '';
  document.getElementById('companyName').value = '';
  document.getElementById('postcode').value = '';
  document.getElementById('email').value = '';
}

function closeRegisterModal() {
  const registerModal = document.getElementById('registerModal');
  registerModal.style.display = 'none';
}

function openProfileModal() {
  const registerModal = document.getElementById('profileModal');
  registerModal.style.display = 'block';

  // Retrieve input fields when opening the modal
  document.getElementById('companyName').value = '';
  document.getElementById('postcode').value = '';
  document.getElementById('townName').value = '';
  document.getElementById('regionName').value = '';
  document.getElementById('email').value = '';

}

function closeProfileModal() {
  const profileModal = document.getElementById('profileModal');
  profileModal.style.display = 'none';
}

// Retrieve values from the registration form
// const username = document.getElementById('regUsername').value;
// const password = document.getElementById('regPassword').value;
// const companyName = document.getElementById('companyName').value;
// const postcode = document.getElementById('postcode').value;
// const email = document.getElementById('email').value;

// Add your logic here to handle the registration data
// console.log('Registration Data:', {
//   username,
//   password,
//   companyName,
//   postcode,
//   email,
// });

// // Assume successful registration, then perform login
// loginUser(username, password);

// function loginUser(username, password) {
//   // Add the logic here to handle the login process
//   console.log('User logged in:', { username });

//   // Close the registration modal after login
//   closeRegisterModal();
//   // Update button visibility after login

//   updateButtonVisibility();
// }

function updateButtonVisibility() {
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const logoutButton = document.getElementById('logoutButton');
  const postJobButton = document.getElementById('postJobButton');

  // Check if the user is logged in (you may use your authentication logic here)
  const isLoggedIn = true; // Replace with your actual logic

  if (isLoggedIn) {
    // If logged in, hide login and register buttons, show logout and post job buttons
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    logoutButton.style.display = 'inline-block';
    postJobButton.style.display = 'inline-block';
  } else {
    // If not logged in, show login and register buttons, hide logout and post job buttons
    loginButton.style.display = 'inline-block';
    registerButton.style.display = 'inline-block';
    logoutButton.style.display = 'none';
    postJobButton.style.display = 'none';
  }
}

module.exports = { openModal };
