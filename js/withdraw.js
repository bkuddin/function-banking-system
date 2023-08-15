document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input-field');
    let withdrawNewInputValue = withdrawInput.value;
    withdrawNewInputValue = parseFloat(withdrawNewInputValue)
    // console.log(withdrawNewInputValue);

    withdrawInput.value = '';

    if(isNaN(withdrawNewInputValue)){
        alert('Type a number here');
        return;
    }

    const withdrawDisplay = document.getElementById('withdraw-display');
    let withdrawPreviousDisplayValue = withdrawDisplay.innerText;
    withdrawPreviousDisplayValue = parseFloat(withdrawPreviousDisplayValue)

    // Calculate 

    const currentWithdrawTotal = withdrawPreviousDisplayValue + withdrawNewInputValue;
    // Set
    withdrawDisplay.innerText = currentWithdrawTotal;


    // Subtract the Withdrawal Amount from the Total Deposit Balance.
    // Bring Total Deposit  Balance
    const depositTotalBalance = document.getElementById('deposit-total-balance');
    let depositTotalBalancePreviousValue = depositTotalBalance.innerText;
    depositTotalBalancePreviousValue = parseFloat(depositTotalBalancePreviousValue);

    //  Calculate 

    const currentTotalDepositBalance = depositTotalBalancePreviousValue - withdrawNewInputValue;

    // Set 
    depositTotalBalance.innerText = currentTotalDepositBalance;

})