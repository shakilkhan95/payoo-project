document.getElementById("btn-cashout").addEventListener("click", () => {
  const agentNumberInput = document.getElementById("agent-input-number");
  const agentNumber = agentNumberInput.value;

  const cashoutAmountInput = document.getElementById("cashout-money");
  const cashoutAmount = Number(cashoutAmountInput.value);

  const userPinInput = document.getElementById("cashout-input-pin");
  const userPin = userPinInput.value;

  const userBalance = document.getElementById("balance");
  const balance = Number(userBalance.innerText);

  if (agentNumber.length !== 11) {
    alert("Please provide a valid agent number");
  } else if (typeof cashoutAmount !== 'number' || cashoutAmount > balance){
    alert("Please provide a valid amount");
  } else if (userPin !== '1234'){
    alert("Please provide a valid pin");
  } else {
    const newBalance = balance - cashoutAmount;
    alert('Cashout Successful');
    userBalance.innerText = newBalance;
  }

  agentNumberInput.value = '';
  cashoutAmountInput.value = '';
  userPinInput.value = '';
});
