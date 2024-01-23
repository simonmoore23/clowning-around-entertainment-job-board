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
  const profileModal = document.getElementById('profileModal');
  profileModal.style.display = 'block';

  // Retrieve existing user profile information and populate the modal
  const companyNameInput = document.getElementById('updatedCompanyName');
  const postcodeInput = document.getElementById('updatedPostcode');
  const townNameInput = document.getElementById('updatedTownName');
  const regionNameInput = document.getElementById('updatedRegionName');
  const emailInput = document.getElementById('updatedEmail');

  // Assuming you have an object with the existing profile data
  const userProfileData = {
    companyName: '',
    postcode: '',
    townName: '',
    regionName: '',
    email: '',
  };

  companyNameInput.value = userProfileData.companyName;
  postcodeInput.value = userProfileData.postcode;
  townNameInput.value = userProfileData.townName;
  regionNameInput.value = userProfileData.regionName;
  emailInput.value = userProfileData.email;
}

document.getElementById('profileForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  // Retrieve updated profile information from the form
  const updatedCompanyName = document.getElementById('updatedCompanyName').value;
  const updatedPostcode = document.getElementById('updatedPostcode').value;
  const updatedTownName = document.getElementById('updatedTownName').value;
  const updatedRegionName = document.getElementById('updatedRegionName').value;
  const updatedEmail = document.getElementById('updatedEmail').value;
});

function closeProfileModal() {
  const profileModal = document.getElementById('profileModal');
  profileModal.style.display = 'none';
}


document.getElementById('profileForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  // Retrieve updated profile information from the form
  const updatedCompanyName = document.getElementById('updatedCompanyName').value;
  const updatedPostcode = document.getElementById('updatedPostcode').value;
  const updatedTownName = document.getElementById('updatedTownName').value;
  const updatedRegionName = document.getElementById('updatedRegionName').value;
  const updatedEmail = document.getElementById('updatedEmail').value;

  try {
    // Send a POST request to the server to update the user's profile
    const response = await fetch('/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: updatedCompanyName,
        postcode: updatedPostcode,
        townName: updatedTownName,
        regionName: updatedRegionName,
        email: updatedEmail,
      }),
    });

    if (response.ok) {
      console.log('Profile updated successfully');

      // Update the displayed profile information in profileContainerRight
      const profileContainerRight = document.querySelector('.profileContainerRight');
      const companyNameDisplay = profileContainerRight.querySelector('.companyNameDisplay');
      const postcodeDisplay = profileContainerRight.querySelector('.postcodeDisplay');
      const townNameDisplay = profileContainerRight.querySelector('.townNameDisplay');
      const regionNameDisplay = profileContainerRight.querySelector('.regionNameDisplay');
      const emailDisplay = profileContainerRight.querySelector('.emailDisplay');

      companyNameDisplay.textContent = updatedCompanyName;
      postcodeDisplay.textContent = updatedPostcode;
      townNameDisplay.textContent = updatedTownName;
      regionNameDisplay.textContent = updatedRegionName;
      emailDisplay.textContent = updatedEmail;

      // Close the profile modal after updating the profile
      closeProfileModal();
    } else {
      console.error('Failed to update profile');
      // Handle errors, show a message to the user, etc.
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors or other issues
  }

  // Close the profile modal after updating the profile
  closeProfileModal();
});

// Job posting modal
function openPostJobModal () {
  const postJobModal = document.getElementById('jobPostModal');
  postJobModal.style.display = 'block';

  // Clear the input fields when opening the modal
  document.getElementById('jobTitle').value = '';
  document.getElementById('jobDescription').value = '';
  document.getElementById('jobSalary').value = '';

const currencyField = document.getElementById('jobSalary');
currencyField.addEventListener('focus', () => {
  currencyField.type = 'number';
}); 

currencyField.addEventListener('blur', () => {
  const amount = parseFloat(currencyField.value);
  const formattedCurrency = formatCurrency(amount); 
  currencyField.type = 'text';
  currencyField.value = formattedCurrency;
});

function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
  return formatter.format(amount);
}
}

function closeJobPostModal() {
  const postJobModal = document.getElementById('jobPostModal');
  postJobModal.style.display = 'none';
}

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

module.exports = { openModal, openPostJobModal, closeJobPostModal };

