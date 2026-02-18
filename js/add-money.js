document.getElementById("btn-add-money").addEventListener("click", () => {
  const selectBank = getValue("user-select-bank", "element");
  const bankAccountNumber = getValue("bank-account-number", "value");
  const addAmount = getValue("add-money", "value");
  const userPin = getValue("add-money-pin", "value");
  const balance = getValue("balance", "text");

  if (bankAccountNumber.length !== 11) {
    alert("Please provide a valid bank account number");
    return;
  } else if (Number(addAmount) <= 0) {
    alert("Please enter a valid amount to add");
    return;
  } else if (userPin !== '1234'){
    alert('Please enter a valid Pin');
    return;
  } else{
    const newBalance = Number(balance) + Number(addAmount);
    const balanceElement = getValue('balance', 'element');

    balanceElement.innerText = newBalance;

    alert(`$${addAmount} added successfully`);
  }
});
