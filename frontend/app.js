const API_URL = 'http://localhost:5000/api/auth';  // Adjust this if your server is running elsewhere

// Signup Function
async function signup() {
  const firstName = document.getElementById('signup-firstname').value;
  const lastName = document.getElementById('signup-lastname').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (response.status === 201) {
      alert('User registered successfully!');
      showLoginForm();
    } else {
      alert(result.msg || 'Signup failed');
    }
  } catch (error) {
    alert('Error during signup');
  }
}

// Login Function
async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const loginData = { email, password };

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Login successful');
      showLogoutForm(result.userType);
    } else {
      alert(result.msg || 'Login failed');
    }
  } catch (error) {
    alert('Error during login');
  }
}

// Logout Function
async function logout() {
  try {
    const response = await fetch(`${API_URL}/logout`, { method: 'POST' });
    const result = await response.json();
    if (response.ok) {
      alert(result.msg);
      showLoginForm();
    } else {
      alert('Logout failed');
    }
  } catch (error) {
    alert('Error during logout');
  }
}

// Show login form
function showLoginForm() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('signup-form').style.display = 'block';
  document.getElementById('logout-section').style.display = 'none';
}

// Show logout form with user info
function showLogoutForm(userType) {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('logout-section').style.display = 'block';
  document.getElementById('user-name').textContent = userType;
}

// Initially show the login form
showLoginForm();
