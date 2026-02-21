document.getElementById('btn-login').addEventListener('click', () => {
    //get the login number and validate it
    const loginNumber = getValue('login-number');
    if(isNaN(Number(loginNumber)) || loginNumber.length !== 11){
        alert('Please provide a valid mobile number');
        return;
    };

    //get the login pin and validate it
    const loginPin = getValue('login-pin');
    if(loginPin.length !== 4){
        alert('Pin must be 4 character');
        return;
    };

    //get the saved user data from localStorage and validate it
    const userInfo = JSON.parse(localStorage.getItem(loginNumber));
    if(!userInfo){
        alert("This number is'nt registered");
        return;
    };
    
    //checking pin
    if(loginPin === userInfo.pin){
        alert('Login successful');
        
        //Get the login and register section and hide it
        const loginRegisterContainer = document.getElementById(
          "login-register-container",
        );
        loginRegisterContainer.classList.add('hidden');

        //Get the Home section and Show it
        const homeContainer = document.getElementById('home-container');
        homeContainer.classList.remove('hidden');

        //Get the balance and show it
        document.getElementById('balance-container').innerText = userInfo.balance;
    }
    return;
});

//function to navigate to register page
document.getElementById('register-link').addEventListener('click', () => {
    //get the login form & hide it
    const loginForm = document.getElementById('login-form');
    loginForm.classList.add('hidden');

    //get the register form and show it
    const registerForm = document.getElementById('register-form');
    registerForm.classList.remove('hidden');
});