function getInputValueByID(inputId){
   const inputValue = document.getElementById(inputId);
   let newInputValue = inputValue.value;
   newInputValue = parseFloat(newInputValue);
  
   inputValue.value = '';

   return newInputValue;
}


function getPreviousTextElementById(elementId){
   const previousTextElement = document.getElementById(elementId);
   let previousTextElementValue = previousTextElement.innerText;
   previousTextElementValue = parseFloat(previousTextElementValue);

   return previousTextElementValue;
}

// Set: Two things are needed here. 1. We have to get to the element I want to set. 2. The new value I want to set.

function setTextElementValueByID(elementId, newValue){
   const previousTextElement = document.getElementById(elementId);
   previousTextElement.innerText = newValue;

}

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