<?php
setcookie("username", "", time() - 3600); // Xoá cookie bằng cách đặt thời gian hết hạn trong quá khứ
header("Location: login.php"); // Chuyển hướng về trang đăng nhập
exit();
?>