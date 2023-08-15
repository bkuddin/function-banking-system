document.getElementById('deposit-button').addEventListener('click', function(){
   //1. Deposit Input Field   
   const takeDepositInput = document.getElementById('deposite-input-field');
   let takeDepositNewInput = takeDepositInput.value;
   takeDepositNewInput = parseFloat(takeDepositNewInput)
//    console.log(takeDepositNewInput)  

   takeDepositInput.value= '';

    //2. Deposit Previous Number
    const depositPreviousTotal = document.getElementById('deposit-total');
    let depositPreviousTotalValue = depositPreviousTotal.innerText;
    depositPreviousTotalValue = parseFloat(depositPreviousTotalValue);
    // console.log(depositPreviousTotalValue)
    
    // 3. Calculation
    const currentDeposit = takeDepositNewInput + depositPreviousTotalValue;
    // 4. Setup
    depositPreviousTotal.innerText = currentDeposit;

    // 5. Deposit Total Balance

    const depositTotalBalance = document.getElementById('deposit-total-balance');
    let depositTotalBalancePreviousValue = depositTotalBalance.innerText;
    depositTotalBalancePreviousValue = parseFloat(depositTotalBalancePreviousValue);

    // Calculate Current Total Deposit Balance

    const currentDepositTotalBalance = depositTotalBalancePreviousValue + takeDepositNewInput;
    depositTotalBalance.innerText = currentDepositTotalBalance 
    



})