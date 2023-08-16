


function getInputValueById(inputId){
    const newInput = document.getElementById(inputId);
    let newInputValue = newInput.value;
    newInputValue = parseFloat(newInputValue);
    newInput.value = '';
    
    return newInputValue;

}

function getTextElementValueById(elementId){
    const withdrawTextElement = document.getElementById(elementId);
    let withdrawPreviousTextValue = withdrawTextElement.innerText;
    withdrawPreviousTextValue = parseFloat(withdrawPreviousTextValue)

    return withdrawPreviousTextValue;
}

function setTextElementValueById(elementId, newValue){
    const previousTextElement = document.getElementById(elementId);
    previousTextElement.innerText = newValue;   

}

// All Functions Call in Event

document.getElementById('withdraw-button').addEventListener('click', function(){
// Function Call:  Get Withdraw input Field Value 
  const withdrawInputAmount = getInputValueById('withdraw-input-field');

// Function Call: Get Withdraw Text Field Value

  const withdrawTextAmount = getTextElementValueById('withdraw-display');

//  Calculation
  const totalWithdraw = withdrawInputAmount + withdrawTextAmount;

// Function Call: Set 

  setTextElementValueById('withdraw-display', totalWithdraw);


})

 