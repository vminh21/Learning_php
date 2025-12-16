<?php
session_start(); // bat dau sesstion
// Kiem tra neu form duoc gui di 
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST["username"];
    setcookie("username", $username, time() + 3600, "/");
    header("Location: welcome.php");// Chuyen huong den trang chao mung
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DangNhap</title>
</head>
<body>
    <h2>Đăng Nhập</h2>
    <form method="post" action="">
        <label>Nhập tên của bạn:</label>
        <input type="text" name="username" require>
        <button type="submit">Đăng nhập</button>
</body>
</html>