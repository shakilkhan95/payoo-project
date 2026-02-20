//toggle to register page
document.getElementById('register-link').addEventListener('click', () =>{
  const loginForm = getValue('login-form', 'element');
  const registerForm = getValue('register-form', 'element');

  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

//toggle to login page
document.getElementById("login-link").addEventListener("click", () => {
  const loginForm = getValue("login-form", "element");
  const registerForm = getValue("register-form", "element");

  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

//login function
document.getElementById("btn-login").addEventListener("click", () => {
  //Get the input values
  const userNumber = getValue("login-input-number", "value");
  const userPin = getValue("login-input-pin", "value");

  if (userNumber === "01234567890" && userPin === "1234") {
    alert("Login Successful");
    window.location.assign("home.html");
  } else {
    alert("Login failed. Check your number and pin");
  }

});