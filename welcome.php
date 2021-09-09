<?php
// require(connect.php);
session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: sign-in.php");
    exit;

$sql = "SELECT 'firstname'= $firstname, 'lastname' 'email', 'phone_no' FROM user_data";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $_SESSION['firstname'] = $firstname;
    $_SESSION['lastname'] = 'lastname';
}

    // $sql = "SELECT * FROM `user_data` WHERE `firstname` LIKE 'michael'";
    //     $result = $conn->query($sql);
    // $_SESSION['phonenumber'] = $phonenumber;
    // $_SESSION['password'] = $password;


}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<?php 

  

?>

    <h1>
        This is the Authetication Page
    </h1>
    <p>Welcome, <!--Tolu--><span><?php echo $_SESSION['firstname']  ?></span></p>
</body>
</html>