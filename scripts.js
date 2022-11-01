/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {

    let email = document.querySelector('input[type="email"]');
    let  btn = document.querySelector('button[type="submit"]');
    let message = document.querySelector(".message");

    

    btn.addEventListener("click", function (event){
        event.preventDefault();

        let text = email.value;

        if (validateEmail(text)) {

            message.innerHTML = `Thank you! Your email address ${text} has been added to our mailing list!`;
        
        } else {

            message.innerHTML = `Please enter a valid email address.`;
            
        }

    });
    
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }