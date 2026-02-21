//function while click on register button
document.getElementById("btn-register").addEventListener("click", () => {
  //getting register number from user input
  const registerNumber = getValue("register-number");
  //validate the number
  if (isNaN(Number(registerNumber)) || registerNumber.length !== 11) {
    alert('Please provide a valid mobile number');
    return;
  };

  // getting register pin
  const registerPin = getValue("register-pin");
  //validate the pin
  if (registerPin.length !== 4){
    alert('Pin must be 4 character');
    return;
  };

  alert('Registration successful');

  //setting the default balance
  const defaultBalance = 0;

  //storing the register info at local storage
  const newUser = new User(registerPin, defaultBalance);
  localStorage.setItem(registerNumber, JSON.stringify(newUser));
});

//function to navigate to login page
document.getElementById("login-link").addEventListener("click", () => {
    //hide the register form
    const registerForm = document.getElementById('register-form');
    registerForm.classList.add('hidden');

    //show the login form
    const loginForm = document.getElementById('login-form');
    loginForm.classList.remove('hidden');
});
