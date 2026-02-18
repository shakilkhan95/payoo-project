document.getElementById("btn-login").addEventListener("click", () => {
  //Get the input values
  const userNumber = getValue('login-input-number', 'value');
  const userPin = getValue('login-input-pin', 'value');

  if (userNumber === "01234567890" && userPin === "1234") {
    alert('Login Successful');
    window.location.assign("home.html");
  } else{
    alert('Login failed. Check your number and pin');
  }

});
