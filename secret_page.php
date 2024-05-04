<?php
// Add authentication logic here (e.g., password protection)

// Establish database connection
$conn = mysqli_connect('localhost', 'username', 'password', 'database');

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve messages from database
$sql = "SELECT * FROM messages";
$result = mysqli_query($conn, $sql);

// Display messages
if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    echo "Name: " . $row["name"]. " - Email: " . $row["email"]. " - Message: " . $row["message"]. "<br>";
  }
} else {
  echo "No messages yet.";
}

// Close database connection
mysqli_close($conn);
?>
