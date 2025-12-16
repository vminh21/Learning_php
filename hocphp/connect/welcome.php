<?php
    session_start(); // bat dau sestion

// Kiểm tra nếu user đã đăng nhập 
if(!isset($_COOKIE["username"])){
    header("Location: login.php");// Chuyển hướng về trang đăng nhập
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chào mừng</title>
</head>
<body>
    <h2>Xin chào, <?php echo $_COOKIE["username"]; ?>!</h2>
    <p>Chào mừng bạn đã đăng nhập.</p>
    <a href="logout.php">Đăng xuất</a>
</body>
</html>