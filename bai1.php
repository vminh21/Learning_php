<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Tai lieu hoc lap trinh web</h1>
    <?php
    echo "<hr>";
    ?>
    <p>Tai lieu hoc HTML</p>
    <p>Tai lieu hoc CSS</p>
    <?php
    echo"<h2>Tai lieu hoc JavaScript</h2>";
    echo "<h3>Tai lieu hoc My SQL</h3>";
    echo "<h4>Tai lieu hoc PHP</h4>";
    ?>
    <hr>
    <?php
    $text = "Tu co ban" . " ". "den nang cao";
    echo $text;
    ?>
    <?php
    function showValue(){
        $a = 5;
        echo $a;// pham vi cuc bo
    }
    Test();// 5
    echo $a; // khong co
    ?> 
    <hr>
    <?php
    $a = 1;
    $b = 2;
    function sum(){
        global $a, $b; // su dung bien toan cuc trong ham
        $b = $a + $b;
    }
    sum();
    echo $b; // 3
    ?>
</body>
</html>
