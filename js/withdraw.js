// All Functions Call in Event

document.getElementById('withdraw-button').addEventListener('click', function(){
// 1. Function Call:  Get Withdraw input Field Value 
  const withdrawInputAmount = getInputValueById('withdraw-input-field');

// 2. Function Call: Get Withdraw Text Field Value

  const withdrawTextAmount = getTextElementValueById('withdraw-display');

// 3. Calculation
  const totalWithdraw = withdrawInputAmount + withdrawTextAmount;

// 4. Function Call: Set 

  setTextElementValueById('withdraw-display', totalWithdraw);

// 5. Get Previous Total Balance using the Function
   
const depositPreviousTotalBalance = getTextElementValueById('deposit-total-balance');

// 6. Calculate Current Total Deposit Balance

   const currentDepositTotalBalance = depositPreviousTotalBalance - withdrawInputAmount;

// 7. Function Call: Set 

setTextElementValueById('deposit-total-balance', currentDepositTotalBalance);


})

 