document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input-field');
    let withdrawNewInputValue = withdrawInput.value;
    withdrawNewInputValue = parseFloat(withdrawNewInputValue)
    // console.log(withdrawNewInputValue);

    withdrawInput.value = '';

    const withdrawDisplay = document.getElementById('withdraw-display');
    let withdrawPreviousDisplayValue = withdrawDisplay.innerText;
    withdrawPreviousDisplayValue = parseFloat(withdrawPreviousDisplayValue)

    // Calculate 

    const currentWithdrawTotal = withdrawPreviousDisplayValue + withdrawNewInputValue;
    withdrawDisplay.innerText = currentWithdrawTotal;


})