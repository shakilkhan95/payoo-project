document.getElementById("btn-cashout").addEventListener("click", () => {
  const agentNumber = getValue('agent-input-number', 'value');
  const cashoutAmount = getValue('cashout-money', 'value');
  const userPin = getValue('cashout-input-pin', 'value');
  const balance = getValue('balance', 'text');

  if (agentNumber.length !== 11) {
    alert("Please provide a valid agent number");
    return;
  } else if (
    isNaN(Number(cashoutAmount)) ||
    Number(cashoutAmount) <= 0 ||
    Number(cashoutAmount) > balance
  ) {
    alert("Please provide a valid amount");
    return;
  } else if (userPin !== "1234") {
    alert("Please provide a valid pin");
    return;
  } else {
    const newBalance = Number(balance) - Number(cashoutAmount);
    const balanceElement = getValue("balance", "element");

    alert("Cashout Successful");

    balanceElement.innerText = newBalance;
  }
  
});
