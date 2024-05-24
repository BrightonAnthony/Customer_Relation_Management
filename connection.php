<?php
// Database connection details
$servername = "localhost";
$dbusername = "brighton";
$dbpassword = "bri123";
$dbname = "crm";

// Create a database connection
$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Insert form data into the database
$sql = "INSERT INTO 'signup' ('email','username','password') VALUES ('$email','$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
