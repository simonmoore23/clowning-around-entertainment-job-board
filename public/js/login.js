async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#regUsername').value.trim();
  const password = document.querySelector('#regPassword').value.trim();
  const companyName = document.querySelector('#companyName').value.trim();
  const postcode = document.querySelector('#postcode').value.trim();
  const email = document.querySelector('#email').value.trim();

  if (username && email && password) {
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        companyName,
        postcode,
        email,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#registerForm')
  .addEventListener('submit', signupFormHandler);
