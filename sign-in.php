<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style>
    form{
        width:40%;
        margin:1em auto 0;
    }

    h1{
        text-align:center;
        margin-top:2em;
    }
    </style>
    <title>Sign In</title>
</head>
<body>
    

        <h1>Sign In</h1>
      <form method="POST" action="" class="formInput">
<?php
    session_start();
    
    require('connect.php');
 
    
    // $_SERVER['HTTP_SELF'] = 'sign-in.php';
    // echo $_SERVER['HTTP_SELF'];

    
    if(isset($_POST['forminput'])){
        $email = $_POST['email'];
        $password = $_POST['password'];

        #To check if the email exists in the database
         $sql = "SELECT * from user_data WHERE email ='$email' && pwd = '$password'";
        $result = $conn->query($sql);
        $num = $result->num_rows;

        if($num == 1 ){
            $_SESSION["loggedin"] = true;
            $_SESSION['email'] = $email;

            // Fetch a data from a table row
            $row = mysqli_fetch_assoc($result);
            $id = $row['id'];
            // Place into a superglobal
            $_SESSION['id'] = $id;


            header("location: welcome.php");           

        }else{
            echo 'incorrect password or email';

        }



    }
    
    
    ?>

          <div class="fn">
              <input type="email" name="email" placeholder="Email Address" id="email">
              <img src="icon-error.svg" alt="error" class="errorimg2">
              <p id="error2"></p>
          </div>

          <div class="fn">
              <input type="password" name="password" placeholder="Password" id="password">
              <img src="icon-error.svg" alt="error" class="errorimg3">
              <p id="error3"></p>
          </div>

          <div>
              <button type="submit" id="btn" name="forminput">Sign in</button>
              <a href="sign-up.php" class="signup-link">Sign Up</a>
          </div>
        
      </form>
       
       <?php 
//   if($_SERVER["REQUEST_METHOD"]== "POST"){
    
//     // collect value of input field
//     $email = htmlspecialchars($_REQUEST['email']);
//     if(empty($email)){
//       echo "First name is empty";}
//       else{
//         echo $email;
//       }
//     }
?>
       <script src="script.js"></script>
</body>
</html>