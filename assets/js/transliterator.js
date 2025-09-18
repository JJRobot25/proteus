const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
// console.log('hello');

window.onload = function() {
}
console.log('hello again')
textInput.addEventListener('input', function() {
    textOutput.textContent = replaceLetters(textInput.value);
});

textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        navigator.clipboard.writeText(textOutput.textContent);
        textInput.value = '';
    }
})

function replaceLetters(input) {
    let result = '';
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        result += letters.get(input[i]);        
    }
   
    if (result.replace(/\s/g, '') == '') {
        result = 'Typ iets!'
    }


    return result;
}


const letters = new Map([
    // Uppercase
    ['A', 'Α'],
    ['B', 'Β'],
    ['G', 'Γ'],
    ['D', 'Δ'],
    ['E', 'Ε'],
    ['Z', 'Ζ'],
    ['H', 'Η'],
    ['Q', 'Θ'],
    ['I', 'Ι'],
    ['K', 'Κ'],
    ['L', 'Λ'],
    ['M', 'Μ'],
    ['N', 'Ν'],
    ['C', 'Ξ'],
    ['O', 'Ο'],
    ['P', 'Π'],
    ['R', 'Ρ'],
    ['S', 'Σ'],
    ['T', 'Τ'],
    ['U', 'Υ'],
    ['F', 'Φ'],
    ['X', 'Χ'],
    ['Y', 'Ψ'],
    ['W', 'Ω'],
    // Lowercase
    ['a', 'α'],
    ['b', 'β'],
    ['g', 'γ'],
    ['d', 'δ'],
    ['e', 'ε'],
    ['z', 'ζ'],
    ['h', 'η'],
    ['q', 'θ'],
    ['i', 'ι'],
    ['k', 'κ'],
    ['l', 'λ'],
    ['m', 'μ'],
    ['n', 'ν'],
    ['c', 'ξ'],
    ['o', 'ο'],
    ['p', 'π'],
    ['r', 'ρ'],
    ['s', 'σ'],
    ['j', 'ς'],
    ['t', 'τ'],
    ['u', 'υ'],
    ['f', 'φ'],
    ['x', 'χ'],
    ['y', 'ψ'],
    ['w', 'ω'],
    // Diacritics
    ['\\', '\u0300'],
    ['/', '\u0301'],
    [')', '\u0313'],
    ['(', '\u0314'],
    ['=', '\u0342'],
    ['|', '\u0345'],
    // Other
    [';', ';'],
    [':', '·'],
    [' ', ' ']
])
