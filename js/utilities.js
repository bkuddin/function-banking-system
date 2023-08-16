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

//  All Withdraw Functions 
//  All Withdraw Functions 
//  All Withdraw Functions 
//  All Withdraw Functions 
//  All Withdraw Functions 
//  All Withdraw Functions 

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