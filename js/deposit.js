document.getElementById('deposit-button').addEventListener('click', function(){

   const takeDepositInput = document.getElementById('deposite-input-field');
   let takeDepositNewInput = takeDepositInput.value;
   takeDepositNewInput = parseFloat(takeDepositNewInput)
//    console.log(takeDepositNewInput)  

   takeDepositInput.value= '';


    const depositPreviousTotal = document.getElementById('deposit-total');
    let depositPreviousTotalValue = depositPreviousTotal.innerText;
    depositPreviousTotalValue = parseFloat(depositPreviousTotalValue);
    // console.log(depositPreviousTotalValue)

    const currentDeposit = takeDepositNewInput + depositPreviousTotalValue;

    depositPreviousTotal.innerText = currentDeposit;
})