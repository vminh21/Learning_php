<?php
if(isset($_GET['search'])){
    echo "Từ khoá: " . htmlspecialchars($_GET['search']);
}
?>