//Function to get value from use input
function getValue(id){
    const value = document.getElementById(id).value;
    return value;
}

//function to get innerText from html element.
function getInnerText(id){
    const text = document.getElementById(id).innerText;
    return text;
}

//constructor function to create userInfo object
function User (pin, balance){
    this.pin = pin;
    this.balance = balance;
}
