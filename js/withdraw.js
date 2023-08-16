


function getInputValueByID(elementId){
    const newInput = document.getElementById(elementId);
    let newInputValue = newInput.value;
    newInputValue = parseFloat(newInputValue);
    newInput.value = '';
    
    return newInputValue;

}

// All Functions Call in Event

document.getElementById('withdraw-button').addEventListener('click', function(){
// Function Call:  Get Withdraw input Field Value 
  const withdrawInput = getInputValueByID('withdraw-input-field');




})

 