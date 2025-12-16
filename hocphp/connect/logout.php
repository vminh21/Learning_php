<?php
   //Xóa cookie bằng cách đặt thời gian hết hạn về quá khứ
   setcookie("username", "", time() - 3600, "/");
    header("Location: login.php"); //Chuyển hướng về trang đăng nhập
    exit();
    ?>