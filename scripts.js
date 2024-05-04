document.addEventListener('DOMContentLoaded', function() {
  // Check if user is logged in
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');

  if (!username || !password) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
  }

  // Display messages for everyone on page load
  displayMessages();
});

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim(); // Trim leading and trailing whitespaces
  
  if (message === '') {
    alert('Please enter a message.');
    return;
  }
  
  var username = localStorage.getItem('username');
  
  // Get user's IP address (Note: This part will not work in client-side JavaScript)
  var ipAddress = "127.0.0.1"; // Example IP address
  
  // Check if cooldown is active for this IP address
  var cooldown = localStorage.getItem(ipAddress);
  if (cooldown && Date.now() - parseInt(cooldown) < 2000) { // 2 seconds cooldown
    alert("You can send only one message every 2 seconds.");
    return;
  }
  
  // Save current timestamp as cooldown
  localStorage.setItem(ipAddress, Date.now());
  
  // Save message to localStorage
  var messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push({ ipAddress: ipAddress, username: username, message: message });
  localStorage.setItem('messages', JSON.stringify(messages));

  // Refresh chat messages after sending
  displayMessages();
  
  // Clear message input
  messageInput.value = '';
}

function displayMessages() {
  var chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML = ''; // Clear previous messages
  var messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.forEach(function(msg) {
    chatMessages.innerHTML += '<div>Username: ' + msg.username + '<br>IP: ' + msg.ipAddress + '<br>' + msg.message + '</div>';
  });
}

function clearMessages() {
  var password = prompt('Enter password to clear messages:');
  if (password === 'your_password') { // Change 'your_password' to your desired password
    localStorage.removeItem('messages');
    // Refresh chat messages after clearing
    displayMessages();
  } else {
    alert('Invalid password');
  }
}

function banIP(ipAddress) {
  var bannedIPs = JSON.parse(localStorage.getItem('bannedIPs')) || [];
  bannedIPs.push(ipAddress);
  localStorage.setItem('bannedIPs', JSON.stringify(bannedIPs));
  alert('IP ' + ipAddress + ' banned.');
}
function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.href = 'login.html';
}
