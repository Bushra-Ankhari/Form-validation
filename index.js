const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const formsubmit = document.getElementById('formsubmit');


//POPUP MESSAGE ON FORM SUBMIT
function sendData (usernamev, sRate, count) {
    if(sRate === count){

        swal("Welcome! "+usernamev, "Successfully Created", "success");
       // location.href = `demo.html?username=${usernamev}`
    }
    else{
        swal("Oops! ", "Form Submission Failed", "error");
       // alert("senddata te error khailam");
    }
};

//FORM SUBMIT SUCCESS OR FAIL
   function successMsg() {
   const usernamev = username.value.trim();

     let formCont = document.getElementsByClassName('form-control');
     var count = formCont.length -1;
    //console.log("UserName", usernamev);
     for(var i = 0; i<formCont.length; i++){
        if(formCont[i].className === "form-control success"){
        var sRate = i;
     } 
     }
     console.log(sRate);
     console.log(count);
     //console.log(usernemev);
     sendData(usernamev, sRate, count);
};


//SUBFUNTION FOR EMAIL
const isEmail = (email) => {
      var atrate = email.indexOf("@");
      if(atrate == 0){
        return false;
      }
      var dot = email.lastIndexOf(".");
      if(dot<=atrate+2){
        return false;
      }
      if(dot === email.length -1){
        return false; 
      }
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

};


//SUBFUNCTION FOR PASSWORD
const isPassword = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

//VALIDATE USERNAME
function userval () {
    let valid = false;
    const usernamev = username.value.trim();
    if(usernamev === ""){
        setErrorMsg(username, `user name can't be blank`);     
    }
    else if(usernamev.length<=2){
        setErrorMsg(username, `user name at least 3 character`);   
    }
    else{
        setSuccessMsg(username);
        valid =true;
    }
    return valid;
    }


  //validate email
  const emailval = () => {   
         let valid = false;
         const emailv = email.value.trim();
         if(emailv ===""){
            setErrorMsg(email, `email id can't be blank`);     
        }
        else if(!isEmail(emailv)){
            setErrorMsg(email, `not a valid email`);  //emailv 
        }
        else{
            setSuccessMsg(email);
            valid = true;
        }
        return valid;
    }

//validate phoneNumber
const phoneval = () => {   
        let valid = false;
         const phonenumberv = phonenumber.value.trim();
         if(phonenumberv ===""){
            setErrorMsg(phonenumber, `phone number can't be blank`);     
        }
        else if(phonenumberv.length != 11){
            setErrorMsg(phonenumber, `phone number must be 11 digits!`);  //phonenumberv 
        }
        else{
            setSuccessMsg(phonenumber);
            valid = true;
        }
        return valid;
    }


 //validate password
 const passval = () => {
    let valid = false;
    const passwordv = password.value.trim();
    if(passwordv ===""){
       setErrorMsg(password, `confirm password can't be blank`);     
   }
   else if(!isPassword(passwordv) ){
       setErrorMsg(password, `Password must has at least 8 characters including at least 1 lowercase , 1 uppercase , 1 number, and 1 special character in (!@#$%^&*)`);   //passwordv
   }
   else{
       setSuccessMsg(password);
       valid = true;
   }
   return valid;
}

//validate confirm password
const cpassval = () => {
       let valid = false;
        const cpasswordv = cpassword.value.trim();
        const passwordv = password.value.trim();

        if(cpasswordv ===""){
            setErrorMsg(cpassword, `confirm password can't be blank`);     
        }
        else if(cpasswordv !== passwordv){
            setErrorMsg(cpassword, `password doesn't match`);   //cpasswordv
        }
        else{
            setSuccessMsg(cpassword);
            valid = true;
        }
        return valid;
    }    


//ERROR MSG
function setErrorMsg (input, errormsgs){
    //console.log("in errormsg");
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

//SUCCESS MSG
function setSuccessMsg(input){
    const formControl = input.parentElement;
   // const small = formControl.querySelector('small');
    formControl.className = "form-control success";
}

//DEBOUNCING
 const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


//FORM MANIPULATION START 
form.addEventListener('input', debounce(function(e) {

  switch (e.target.id) {
    case 'username':
        userval();
        break;
    case 'email':
       emailval();
        break;
    case 'phonenumber':
        phoneval();
        break;
    case 'password':
        passval();
        break;
    case 'cpassword':
        cpassval();
        break;
}

}));


//SUBMIT BUTTON TRIGGERED

form.addEventListener('submit', function (e){
    e.preventDefault();
    // const form = document.getElementById('form');
    // form.addEventListener('submit', function(e) {
    // // Prevent default behavior
    // e.preventDefault();
    // Create payload as new FormData object
//     const payload = new FormData(form);
//     console.log("payload", payload);
//     // Post the payload using Fetch
//     fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: payload,
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// });
// })();

     // validate fields
     let isUsernameValid =  userval(),
     isEmailValid = emailval(),
     isPhoneValid = phoneval(),
     isPasswordValid = passval(),
     isConfirmPasswordValid = cpassval();

 let isFormValid = isUsernameValid &&
     isEmailValid &&
     isPhoneValid &&
     isPasswordValid &&
     isConfirmPasswordValid;

 // submit to the server if the form is valid
 //if (isFormValid) {
    successMsg();
 //}
});
