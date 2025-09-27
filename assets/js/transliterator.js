import { replaceLetters } from "./transliterator_base.js";

const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

window.onload = function() {
    textInput.addEventListener('input', function() {
        textOutput.textContent = replaceLetters(textInput.value);
    });
    
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && textInput.value) {
            navigator.clipboard.writeText(textOutput.textContent);
            textInput.value = '';
        }
    })
}