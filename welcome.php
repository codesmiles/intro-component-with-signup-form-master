<?php
session_start();
require('connect.php');

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: sign-in.php");
}


else{
$myemail =  $_SESSION['email'];
$unique_id = $_SESSION['id'];

$sql = "SELECT * FROM user_data WHERE id ='$unique_id'";
$result = $conn->query($sql);
$row = mysqli_fetch_assoc($result);

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
    <p> <?php echo'Welcome, '.$row['lastname'];?></p>

<h1>Your data</h1>
<p>
    First name: <?php echo $row['firstname'] ?> <br/>
    Last name: <?php echo $row['lastname'] ?> <br/>
    Phone number: <?php echo $row['phone_no'] ?> <br/>
    Email address: <?php echo $myemail ?>

    <h1><?php echo 'MERCY'?></h1>
</p>

<a href="logout.php">Click here to log out</a>
   
</body>
</html>