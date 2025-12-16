<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>In dãy số 1-100</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
        }
    </style>
</head>
<body>

    <h2>Dãy số từ 1 đến 100:</h2>

    <?php
        // Vòng lặp chạy từ 1 đến 100
        for ($i = 1; $i <= 100; $i++) {
            
            // Kiểm tra số chẵn (chia hết cho 2)
            if ($i % 2 == 0) {
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