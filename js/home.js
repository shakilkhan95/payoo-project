document.getElementById("btn-container").addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  const btnValue = button.value;

  const getForm = getValue(btnValue, "element");
  const paymentSection = getValue("latest-payment-section", "element");
  const forms = document.getElementsByClassName("forms");
  for (const form of forms) {
    form.classList.add("hidden");
  }

  paymentSection.classList.add("hidden");

  getForm.classList.remove("hidden");
});