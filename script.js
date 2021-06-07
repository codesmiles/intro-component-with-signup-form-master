const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameError = document.getElementById("error");
const lastNameError = document.getElementById("error1");
const emailError = document.getElementById("error2");
const passwordError = document.getElementById("error3");
const firstNameErrorImage = document.querySelector(".errorimg");
const lastNameErrorImage = document.querySelector(".errorimg1");
const emailErrorImage = document.querySelector(".errorimg2");
const passwordErrorImage = document.querySelector(".errorimg3")
const submit = document.querySelector("#btn");
const formInput = document.querySelector(".formInput")

submit.addEventListener("click", ()=>{
  
  function firstNameErrorNotify(){
    firstNameError.innerHTML= "First name cannot be empty";
    firstNameErrorImage.style.display = "block";
    return false
  }
  function lastNameErrorNotify(){
    lastNameError.innerHTML = "Last name cannot be empty"
    lastNameErrorImage.style.display = "block"
     return false
  }
  function emailErrorNotify(){
    emailError.innerHTML = "Looks like this is not an email";
    emailErrorImage.style.display = "block";
    return false
  }
  function passwordErrorNotify(){
    passwordError.innerHTML = "Password cannot be empty";
    passwordErrorImage.style.display = "block";
    return false
  }
  // function accessGranted(){
  //   return formInput.reset(),
  //   firstNameError = "",
  //   lastNameError = "",
  //   emailError = "",
  //   passwordError = "",
  //   firstNameErrorImage.style.display = "none",
  //   lastNameErrorImage.style.display = "none",
  //   emailErrorImage.style.display = "none",
  //   passwordErrorImage.style.display ="none";
    
  // }

  function reverseFirstNameErrorNotify(){
    firstNameError.innerHTML = "";
    firstNameErrorImage.style.display = "none";
    return true;
  }

  function reverseLastNameErrorNotify(){
    lastNameError.innerHTML = ""
    lastNameErrorImage.style.display = "none"
     return true
  }
  function reverseEmailErrorNotify(){
    emailError.innerHTML = "";
    emailErrorImage.style.display = "";
    return true
  }
  function reversePasswordErrorNotify(){
    passwordError.innerHTML = "";
    passwordErrorImage.style.display = "";
    return true
  }


  if(firstName.value.length === 0 && lastName.value.length === 0 && email.value.length === 0 && password.value.length === 0)
  {
    firstNameErrorNotify();
    lastNameErrorNotify();
    emailErrorNotify();
    passwordErrorNotify();

  
  }

 else if (firstName.value.length === 0 && lastName.value.length === 0 && email.value.length === 0)
 {
  firstNameErrorNotify();
  lastNameErrorNotify();
  emailErrorNotify();


 }
 else if(firstName.value.length === 0 && lastName.value.length === 0 && password.value.length === 0)
 {
  firstNameErrorNotify();
  lastNameErrorNotify();
  passwordErrorNotify();
 
}
 else if(firstName.value.length === 0 && email.value.length === 0 && password.value.length === 0)
 {
  firstNameErrorNotify();
  emailErrorNotify();
  passwordErrorNotify();
  


 }
 else if(lastName.value.length === 0 && email.value.length === 0 && password.value.length === 0)
 {
  lastNameErrorNotify();
  emailErrorNotify();
  passwordErrorNotify();


 }

 else if(firstName.value.length === 0 && lastName.value.length === 0)
 {
  firstNameErrorNotify();
  lastNameErrorNotify();


 }

 else if(firstName.value.length === 0 && email.value.length === 0)
 {
  firstNameErrorNotify();
  emailErrorNotify();


 }

 else if(firstName.value.length === 0 && password.value.length === 0)
 {
  passwordErrorNotify();
  firstNameErrorNotify();


 }

 else if(lastName.value.length === 0 && email.value.length === 0)
 {
  lastNameErrorNotify();
  emailErrorNotify();


 }

 else if(lastName.value.length === 0 && password.value.length === 0)
 {
  lastNameErrorNotify();
  passwordErrorNotify();


 }
 else if(email.value.length === 0 && password.value.length === 0)
 {
  emailErrorNotify();
  passwordErrorNotify();


}
else if(firstName.value.lngth === 0)
{
  firstNameErrorNotify();


}

else if(lastName.value.length === 0)
{
  lastNameErrorNotify();
}

else if(email.value.length === 0)
{
  emailErrorNotify();
}

else if(password.value.length === 0)
{
  passwordErrorNotify();
}

  else{
    // accessGranted();
      return true
  }
  


  if(firstName.value.length !== 0 && lastName.value.length !== 0 && email.value.length !== 0 && password.value.length !== 0)
  {
    reverseFirstNameErrorNotify();
    reverseLastNameErrorNotify();
    reverseEmailErrorNotify();
    reversePasswordErrorNotify();

  }

 else if (firstName.value.length !== 0 && lastName.value.length !== 0 && email.value.length !== 0)
 {
  reverseFirstNameErrorNotify();
  reverseLastNameErrorNotify();
  reverseEmailErrorNotify();


 }
 
 else if(firstName.value.length !== 0 && lastName.value.length !== 0 && password.value.length !== 0)
 {
  reverseFirstNameErrorNotify();
  reverseLastNameErrorNotify();
  reversePasswordErrorNotify();
 
  // formInput.reset();
}

else if(firstName.value.length !== 0 && email.value.length !== 0 && password.value.length !== 0)
 {
  reverseFirstNameErrorNotify();
  reverseEmailErrorNotify();
  reversePasswordErrorNotify();
 }

 else if(lastName.value.length !== 0 && email.value.length !== 0 && password.value.length !== 0)
 {
  reverseLastNameErrorNotify();
  reverseEmailErrorNotify();
  reversePasswordErrorNotify();
 }

 else if(firstName.value.length !== 0 && lastName.value.length !== 0)
 {
  recerseFirstNameErrorNotify();
  reverseLastNameErrorNotify();
 }

 else if(firstName.value.length !== 0 && email.value.length !== 0)
 {
  reverseFirstNameErrorNotify();
  reverseEmailErrorNotify();
 }

 else if(firstName.value.length !== 0 && password.value.length !== 0)
 {
  reversePasswordErrorNotify();
  reverseFirstNameErrorNotify();
 }

 else if(lastName.value.length !== 0 && email.value.length !== 0)
 {
  reverseLastNameErrorNotify();
  reverseEmailErrorNotify();
 }

 else if(lastName.value.length !== 0 && password.value.length !== 0)
 {
  reverseLastNameErrorNotify();
  reversePasswordErrorNotify();
 }

 else if(email.value.length !== 0 && password.value.length !== 0)
 {
  reverseEmailErrorNotify();
  reversePasswordErrorNotify();
}

else if(firstName.value.lngth !== 0)
{
  reverseFirstNameErrorNotify();
}

else if(lastName.value.length !== 0)
{
  reverseLastNameErrorNotify();
}

else if(email.value.length !== 0)
{
  reverseEmailErrorNotify();
}

else if(password.value.length !== 0)
{
  reversePasswordErrorNotify();
}

  else{
    // accessGranted();
      return false
  }

})

// submit.addEventListener("onkeypress", ()=>{
  
  
  

// })