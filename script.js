//Stating the available HTML syntax and values

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


//USING EVENT LISTENER TO CHECK ON CLICK

submit.addEventListener("click", ()=>{
 
//PUTTING DOWN FUNCTIONS TO CALL OR INVOKE LATER ON

  function firstNameErrorNotify(){
   return firstNameError.innerHTML= "First name cannot be empty",
    firstNameErrorImage.style.display = "block";
    
  }
  function lastNameErrorNotify(){
    return lastNameError.innerHTML = "Last name cannot be empty",
    lastNameErrorImage.style.display = "block";
  }

  function emailErrorNotify(){
    return emailError.innerHTML = "Looks like this is not an email",
    emailErrorImage.style.display = "block";
  
  }


  function passwordErrorNotify(){
    return passwordError.innerHTML = "Password cannot be empty",
    passwordErrorImage.style.display = "block";
  }
  /*NOT IMPORTANT ANYMORE

  function accessGranted(){
  //   return formInput.reset(),
    return firstNameError.innerHTML = "",
    lastNameError.innerHTML = "",
    emailError.innerHTML = "",
    passwordError.innerHTML = "",
    firstNameErrorImage.style.display = "none",
    lastNameErrorImage.style.display = "none",
    emailErrorImage.style.display = "none",
    passwordErrorImage.style.display ="none";
    
  }
  function access(){
    window.onload(formInput)
  }
  */

  function reverseFirstNameErrorNotify(){
    return firstNameError.innerHTML = "",
    firstNameErrorImage.style.display = "none";
   
  }

  function reverseLastNameErrorNotify(){
    return lastNameError.innerHTML = "",
    lastNameErrorImage.style.display = "none";
     
  }
  function reverseEmailErrorNotify(){
    return emailError.innerHTML = "",
    emailErrorImage.style.display = "";
   
  }
  function reversePasswordErrorNotify(){
    return passwordError.innerHTML = "",
    passwordErrorImage.style.display = "";
  
  }

  //WITH THE HELP OF THE PREVIOUSLY MADE FUNCTIONS AN IF STATEMENT(PROBABLY PRACTICE TO FIND A SHORTER WAY) TO CONFIRM IF THE INPUT EVENT IS TRUE OR NOT

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

else if(firstName.value.length === 0)
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
   
      return true
  }

  

// ANOTHER EVENT LISTENER TO CHECK ON THE INPUT OF THE FORM

  formInput.addEventListener("input", ()=>{
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
  reverseFirstNameErrorNotify();
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
 
      return false
  }

  })


})