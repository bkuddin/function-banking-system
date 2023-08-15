document.getElementById('deposit-button').addEventListener('click', function(){

   const takeDepositInput = document.getElementById('deposite-input-field');
   const takeDepositNewInput = takeDepositInput.value;
//    console.log(takeDepositNewInput)   


    const depositPreviousTotal = document.getElementById('deposit-total');
    const depositPreviousTotalValue = depositPreviousTotal.innerText;
    // console.log(depositPreviousTotalValue)

    const currentDeposit = takeDepositNewInput + depositPreviousTotalValue;

    depositPreviousTotal.innerText = currentDeposit;
})