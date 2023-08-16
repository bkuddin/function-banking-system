function getInputValueByID(elementId){
    const newInput = document.getElementById(elementId);
    let newInputValue = newInput.value;
    newInputValue = parseFloat(newInputValue);
    newInput.value = '';
    
    return newInputValue;

}

 