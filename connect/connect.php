<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hehe";

// 1. Tạo kết nối (Dùng mysqli_connect)
$conn = mysqli_connect($servername, $username, $password, $dbname);

// 2. Kiểm tra kết nối
if (!$conn) {
  die("Kết nối thất bại: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8");

echo "
<style>
    .container {
        width: 600px;
        margin: 50px auto;
        font-family: sans-serif;
    }
    
    .status {
        background-color: #d4edda;  
        color: #155724;             
        border: 1px solid #c3e6cb; 
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        margin-bottom: 20px;
        font-weight: bold;
    }

    table {
        width: 100%;
        border-collapse: separate; 
        border-spacing: 0;
        border: 1px solid #ccc;
        border-radius: 10px; 
        overflow: hidden;
    }
    
    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ccc;
    }

    th {
        background-color: #007bff;
        color: white;
    }
    
    tr:last-child td { border-bottom: none; }
</style>
";
echo "<div class='container'>";

echo "<div class='status'>Kết nối database thành công!</div>";

//code select
$sql = "SELECT * from test";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
    echo "<table>";
    echo "<thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Note</th>
            </tr>
          </thead>";
    echo "<tbody>";
    while($row = mysqli_fetch_assoc($result)){
        echo "<tr>";
        // Hiển thị ID 
        echo "<td>" . (isset($row["id"]) ? $row["id"] : "N/A") . "</td>"; 
        echo "<td>" . $row["name"]. "</td>";
        echo "<td>" . $row["note"]. "</td>";
        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";
} else {
    echo "<p>Không có record nào trong bảng.</p>";
}

// code insert

// $sql1 = "INSERT INTO test VALUES ('','cuoc', 'noob')";

// if(mysqli_query($conn, $sql1)){
//     echo "Them thanh cong";
// }else{
//     echo "Loi: " . $sql1 . "<br>" . mysqli_error($conn);
// }

// code update

// $sql2 = "UPDATE test SET name = 'giang3k', note = 'hehe' where id = '4'";

// if(mysqli_query($conn, $sql2)){
//     echo "Cap nhat du lieu thanh cong";
// }else{
//     echo "Loi: " . $sql2 . "<br>" . mysqli_error($conn);
// }

// code delete

// $sql3 = "DELETE From test where id = '7'";

// if(mysqli_query($conn, $sql3)){
//     echo "Xoa du lieu thanh cong";
// }else{
//     echo "Loi: " . $sql3 . "<br>" . mysqli_error($conn);
// }
mysqli_close($conn);
?>