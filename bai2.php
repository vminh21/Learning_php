<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài 2 (1-100)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.5;
            background-color: #f4f4f4;
        }
        h1 {
            font-size: 36px;
            color: #333;
            text-align: center;
        }
        span {
            font-size: 16px;
            margin: 2px;
        }
    </style>
</head>
<body>
    <h1>Numbers from 1 to 100</h1>
    <?php
    for ($i = 1; $i <= 100; $i++) {
        if($i % 2 == 0) {
          // Yêu cầu: In đậm + Màu đỏ
                echo "<span style='color: red; font-weight: bold;'>$i</span> ";
            } 
            // Ngược lại là số lẻ
            else {
                // Yêu cầu: In đậm + Nghiêng + Màu xanh
                echo "<span style='color: green; font-weight: bold; font-style: italic;'>$i</span> ";
            }
    }
    ?>
</body>
</html>