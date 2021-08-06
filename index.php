<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Intro component with sign up form</title>

 <link rel="stylesheet" href="style.css">
</head>
<body>
  
<div class="main">
  <div class="details">
    <h1>
      Learn to code by watching others
    </h1>
    <p>
      See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
      but understanding how developers think is invaluable. 
    </p>
  </div>

  <div class="right-details">
    <div class="trial">
      <p>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </p>
    </div>

    <div >
     <p><?php
    //CONNECTS TO THE DATABASE
      require('connect.php');

//ISSET() IS USED TO AVOID ERROR MESSAGES IF THE INPUT TYPES ARE EMPTY
      if(isset($_POST['forminput'])){
        
        //ASSIGNING INPUT VALUES INTO PHP VARIABLES
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $password =$_POST['password'];
        
        // CHECK IF THE THE EMAIL EXIST IN D DATABASE
        $sql = "SELECT email from user_data WHERE email ='$email'";
        $result = $conn->query($sql);
        $num = $result->num_rows;

        if($num == 0){
          
          // IF THE EMAIL HASN'T BEEN USED

          //Fill in the database the necessary input data
          $ql = "INSERT INTO user_data (firstname, lastname, email, pwd) VALUES('$firstname', '$lastname', '$email', '$password')";         

          //NOTIFY UIF THE DATA HAS BEEN CREATED OR NOT
          if($conn ->query($ql)){
            echo "Record created successfully";
           // header('location:login.php');


          }
          else{
            echo "Error: " . $ql . mysqli_error($conn);
          };

        }
        else{
          //SIGNIFY THAT THE EMAIL ALREADY EXIST IN THE DATABASE

          echo 'Email already exist';
        };

      }
  

  ?></p>
      <form method="POST" action="" class="formInput">
       

      
      <div class="fn">  
            <input type="text" name="firstname" placeholder="First Name" id="first-name">
            <img src="icon-error.svg" alt="error" class="errorimg">
            <p id="error"></p>
          </div>

          <div class="fn">  
            <input type="text" name="lastname" placeholder="Last Name" id="last-name">
            <img src="icon-error.svg" alt="error" class="errorimg1">
            <p id="error1"></p>
          </div>

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
          <button type="submit" id="btn" name="forminput">Claim your free trial</button>
          <input type="reset" value="reset" name="del">
        </div>
        <p> By clicking the button, you are agreeing to our  <a href="">Terms and Services</a> </p>
      </form>
    </div>
  </div>

</div>
  
 
  <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/codesmiles">michael(codesmiles)</a>.
    </p>
  </footer>

  <script src="script.js"></script>
</body>
</html>