const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const formsubmit = document.getElementById('formsubmit');


const emailv = email.value.trim();
const phonenumberv = phonenumber.value.trim();
const passwordv = password.value.trim();
const cpasswordv = cpassword.value.trim();


const sendData = (sRate, count) => {
    if(sRate === count){
        swal("Welcome! ","Successfully Created", "success");
       // location.href = `demo.html?username=${usernamev}`
    }
    else{
        alert("senddata te error khailam")
      //  Swal.fire({
      //      icon: 'error',
      //      title: 'Oops...',
      //      text: 'Something went wrong!',
      //      footer: '<a href="">Why do I have this issue?</a>'
      //    });
    }
};

    const successMsg = () => {
    // console.log("in successMsg");
    //const usernamev = document.getElementById('username').value.trim();
     let formCont = document.getElementsByClassName('form-control');
     var count = formCont.length -1;
   //  console.log(count);
     for(var i = 0; i<formCont.length; i++){
        if(formCont[i].className === "form-control success"){
        var sRate = i;
     } 
    // else{
     //   return false;
    // }
     }
     //console.log(usernamev);
     console.log(sRate);
     console.log(count);
     sendData(sRate, count);
};



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
//-----------------------------------------------------***********************************
// selector
var menu = document.querySelector('.menu');

// method
function toggleMenu (event) {
//  if (!this.classList.contains('active')) {
  //  this.classList.add('active');
  //}// e.preventDefault();
          //validate userName
          const usernamev = username.value.trim();
          if(usernamev === ""){
            setErrorMsg(username, `user name can't be blank`);     
        }
        else if(usernamev.length<=2){
            setErrorMsg(username, `user name at least 3 character`);   
        }
        else{
            
            var valid2 = true;
            setSuccessMsg(username);
           

        }
  event.preventDefault();
}

// events
menu.addEventListener('click', toggleMenu, false);
menu.addEventListener('onchange', toggleMenu, false);
//-----------------------------------------------------***********************************
//validate userName
const userval = () => {
    let valid = false;
    function toggleValue(event){
        
    }
    const usernamev = username.value.trim();
    //console.log(usernamev);
    username.addEventListener('blur', () => {
       // e.preventDefault();
          //validate userName
        if(usernamev === ""){
            setErrorMsg(username, `user name can't be blank`);     
        }
        else if(usernamev.length<=2){
            setErrorMsg(username, `user name at least 3 character`);   
        }
        else{
            
            var valid2 = true;
            setSuccessMsg(username);
           

        }

    
    });
    return valid;
    }

  //validate email
const emailval = () => {
    let valid = false;
    email.addEventListener('blur', (valid) => {
        
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
        
    });
    return valid;
    }


//validate phoneNumber
const phoneval = () => {
    phonenumber.addEventListener('blur', () => {
         
         if(phonenumberv ===""){
            setErrorMsg(phonenumber, `phone number can't be blank`);     
        }
        else if(phonenumberv.length != 11){
            setErrorMsg(phonenumber, `phone number must be 11 digits!`);  //phonenumberv 
        }
        else{
            setSuccessMsg(phonenumber);
        }
    });
    }

 
 //validate password
 const passval = () => {
    password.addEventListener('blur', () => {
        
         if(passwordv ===""){
            setErrorMsg(password, `confirm password can't be blank`);     
        }
        else if(passwordv.length<5){
            setErrorMsg(password, `password at least 5 character`);   //passwordv
        }
        else{
            setSuccessMsg(password);
        }
    });
    }


//validate confirm password
const cpassval = () => {
    
cpassword.addEventListener('blur', () => {

    if(cpasswordv ===""){
        setErrorMsg(cpassword, `confirm password can't be blank`);     
    }
    else if(cpasswordv !== passwordv){
        setErrorMsg(cpassword, `password doesn't match`);   //cpasswordv
    }
    else{
        setSuccessMsg(cpassword);
    }

});
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

//FORM MANIPULATION START 
form.addEventListener('input', (e) => {
    userval();
    console.log("hi")
   //console.log(userval())

  //  console.log(emailval());
});



//SUBMIT BUTTON TRIGGERED
form.addEventListener('submit', (e) => {
    //console.log("hi");
    e.preventDefault();
   // formsubmit.addEventListener('click', () => {
       // alert(usernamev);

    
        // successMsg(usernamev);
       // e.preventDefault();
       // Validate();
      

    successMsg();
 
   //  });
    //Validate();
});