// Functions Call
document.getElementById('deposit-button').addEventListener('click', function(){
   // Function Call: Get Input Value By ID
   const newDepositAmount = getInputValueByID('deposite-input-field');  
   // Function Call: Get Previous Value by ID
   const previousDepositTotal = getPreviousTextElementById('deposit-total');

   // 3. Calculation
   const currentDeposit = newDepositAmount + previousDepositTotal;

   // 4. Function Call: Set Deposit Total
   
   setTextElementValueByID('deposit-total', currentDeposit )

   // 5. Get Previous Total Balance using the Function
   
   const depositPreviousTotalBalance = getPreviousTextElementById('deposit-total-balance');

   // 6. Calculate Current Total Deposit Balance

   const currentDepositTotalBalance = depositPreviousTotalBalance + newDepositAmount;

   // 7. Function Call for: Set Current DepositTotal Balance
   setTextElementValueByID('deposit-total-balance', currentDepositTotalBalance )

})