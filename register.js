document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;

  var userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
  
  // Check if username already exists
  var usernameExists = userDatabase.some(function(user) {
    return user.username === newUsername;
  });

  if (usernameExists) {
    alert('Username already exists. Please choose another.');
    return;
  }

  // Register new user
  userDatabase.push({ username: newUsername, password: newPassword });
  localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
  alert('Account registered successfully!');
  window.location.href = 'login.html'; // Redirect to login page
});
