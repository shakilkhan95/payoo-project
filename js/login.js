document.getElementById("btn-login").addEventListener("click", () => {
  //Get the input values
  const numberInput = document.getElementById("login-input-number");
  const userNumber = numberInput.value;

  const pinInput = document.getElementById("login-input-pin");
  const userPin = pinInput.value;

  if (userNumber == "01234567890" && userPin == "1234") {
    alert('Login Successful');
    window.location.assign("home.html");
  } else{
    alert('Login failed. Check your number and pin');
  }

  //clear the input fields
  numberInput.value = '';
  pinInput.value = '';
});
