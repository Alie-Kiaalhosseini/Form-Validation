const nameError = document.querySelector('#name-error');
const phoneError = document.querySelector('#phone-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const submitError = document.querySelector('#submit-error');
const nameField = document.querySelector('#contact-name');
const phoneField = document.querySelector('#contact-phone');
const emailField = document.querySelector('#contact-email');
const messageField = document.querySelector('#contact-message');
const submitBtn = document.querySelector('button');


// validation of name
function nameValidation (){
 let name =nameField.value;
    if(name.length === 0 ){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'name is required';
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

// validation of phone
function phoneValidation(){
 let phone = phoneField.value;
    if(phone.length === 0 ){
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length !== 10  ){
        phoneError.innerHTML = 'phone no should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        nameError.innerHTML = 'phone no is required';
        return false;
    }
    phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

// validation of email

function emailValidation (){
const email = emailField.value;
    if(email.length === 0 ){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

// validation of message

function messageValidation(){
const message = messageField.value;
    let left = 30 - message.length;
    if(message.length === 0 ){
        messageError.innerHTML =  'message is required';
        return false;
    }
    if(left>0){
        messageError.innerHTML = left +' more message is required';
        return false;
    }
    messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

//form validation 

function totalValidation(){
    
    if(!nameValidation() || !phoneValidation() || ! emailValidation() || !messageValidation()){
        submitError.style.display = 'block'
submitError.innerHTML= 'Fix Error';
setTimeout(()=>{submitError.style.display = 'none';},2000)
return false;
    }
}
