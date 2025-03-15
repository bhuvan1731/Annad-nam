<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $number = $_POST['number'];

    // Database connection
    $conn = new mysqli('127.0.0.1', 'root', '', 'test2');

    if ($conn->connect_error) {
        error_log("Connection Failed: " . $conn->connect_error);
        die("An error occurred. Please try again later.");
    } else {
        $stmt = $conn->prepare("INSERT INTO registration (firstName, lastName, gender, email, password, number) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssi", $firstName, $lastName, $gender, $email, $password, $number);
        
        if ($stmt->execute()) {
            header("Location: success.html"); // Redirect to a success page
        } else {
            header("Location: error.html"); // Redirect to an error page
        }
        
        $stmt->close();
        $conn->close();
    }
}
?>
