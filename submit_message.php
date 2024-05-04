<?php
// Establish database connection (replace 'localhost', 'username', 'password', 'database' with your database credentials)
$conn = mysqli_connect('localhost', 'username', 'password', 'database');

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Prepare and bind SQL statement to insert message into database
$stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

// Set parameters and execute SQL statement
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$stmt->execute();

// Close statement and database connection
$stmt->close();
$conn->close();

// Redirect user to a secret page after submission
header("Location: secret_page.php");
exit();
?>
