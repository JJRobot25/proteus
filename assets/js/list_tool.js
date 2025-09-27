import { replaceLetters } from "./transliterator_base.js";

const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const wordSepInput = document.getElementById('wordSep');
const pairSepInput = document.getElementById('pairSep');
const copyButton = document.getElementById('copyList');
const table = document.getElementById('listTable');
const wordList = new Map();
let word = '';

window.onload = function() {
    textInput.addEventListener('input', function() {
        textOutput.textContent = replaceLetters(textInput.value);
    });
    
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && textInput.value) {
            if (word) {
                wordList.set(word, textOutput.textContent);
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = word;
                cell2.innerHTML = textOutput.textContent;
                word = '';
            } else {
                word = textOutput.textContent;
            }
            textInput.value = '';
        }
    })

    copyButton.onclick = () => copyList();
}

function copyList() {
    let wordSep;
    let pairSep;
    let text = '';
    let i = 1;
    const mapSize = wordList.size;

    if (wordSepInput.value === 'tab' || !wordSepInput.value) {
        wordSep = '\t';
    } else if (wordSepInput.value === 'enter') {
        wordSep = '\n';
    } else {
        wordSep = wordSepInput.value;
    }

    if (pairSepInput.value === 'tab') {
        pairSep = '\t';
    } else if (pairSepInput.value === 'enter' || !pairSepInput.value) {
        pairSep = '\n';
    } else {
        pairSep = pairSepInput.value;
    }

    wordList.forEach(function(value, key) {
        if (i == mapSize) {
            text += key + wordSep + value
        } else {
            text += key + wordSep + value + pairSep;
            i++
        }
    })

    console.log(text);
    navigator.clipboard.writeText(text);
}