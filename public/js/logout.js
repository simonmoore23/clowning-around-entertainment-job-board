// Send a POST request to the API endpoint
const logout = async () => {
  const response = await fetch('/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // If successful, redirect the browser to the '/' homepage
  if (response.ok) {
    console.log('user logged out');
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logoutButton').addEventListener('click', logout);
