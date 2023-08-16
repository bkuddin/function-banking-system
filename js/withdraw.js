


function getInputValueByID(inputId){
    const newInput = document.getElementById(inputId);
    let newInputValue = newInput.value;
    newInputValue = parseFloat(newInputValue);
    newInput.value = '';
    
    return newInputValue;

}

function getTextElementValue(elementId){
    const withdrawTextElement = document.getElementById(elementId);
    let withdrawPreviousTextValue = withdrawTextElement.innerText;
    withdrawPreviousTextValue = parseFloat(withdrawPreviousTextValue)

    return withdrawPreviousTextValue;
}

// All Functions Call in Event

document.getElementById('withdraw-button').addEventListener('click', function(){
// Function Call:  Get Withdraw input Field Value 
  const withdrawInput = getInputValueByID('withdraw-input-field');

// Function Call: Get Withdraw Text Field Value

  const withdrawText = getTextElementValue('withdraw-display');




})

 