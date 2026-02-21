//Get the add money button and show the add money form
document.getElementById('btn-add-money').addEventListener('click', () => {
    //Get the add money form and show it
    const addMoneyForm = document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');

    //Get the latest payment section and hide it
    const latestPaymentSection = document.getElementById('latest-payment-section');
    latestPaymentSection.classList.add('hidden');
});