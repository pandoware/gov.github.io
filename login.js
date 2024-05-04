document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];

  // Check if username exists in database
  var userExists = userDatabase.find(function(user) {
    return user.username === username;
  });

  if (userExists) {
    // Check if password is correct
    if (userExists.password === password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.href = 'about.html';
    } else {
      alert('Invalid password');
    }
  } else {
    alert('Username does not exist');
  }
});