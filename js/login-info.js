const userNumber = getValue('');
const pin = '1234';
const balance = '45000';

function Users (pin, balance){
    this.pin = pin;
    this.balance = balance;
}

const user = new Users(userPin, balance);
localStorage.setItem(userNumber, JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem(userNumber));


