import letterMap from "./letterMap.js";

const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

textInput.addEventListener('input', function() {
    textOutput.textContent = replaceLetters(textInput.value);
});

function replaceLetters(input) {
    let toReturn = '';
    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        

        switch (currentChar) {
            // Spiritus asper
            case "'": spiritusAsper(input[i+1]); break;

            // Spiritus lenis
            case '`': spiritusLenis(input[i+1]); break;

            // Iota subscriptum
            case '~': iotaSub(input[i+1]); break;

            // Sigma final form
            case 's': sigmaSigmaOnTheWall(input[i+1]); break;

            // Turn into equivalent Greek letter (from letterMap), or stay the same if no match is present
            default:
                if (letterMap.has(currentChar)) {
                    toReturn += letterMap.get(currentChar);
                } else {
                    toReturn += currentChar;
                }
                break;
            
            function spiritusAsper(nextChar) { // (hard breathing)
                switch (nextChar) {
                    case 'A': toReturn += 'Ἁ'; i++; break;
                    case 'Ã': toReturn += 'ᾉ'; i++; break;
                    case 'E': toReturn += 'Ἑ'; i++; break;
                    case 'H': toReturn += 'Ἡ'; i++; break;
                    case 'I': toReturn += 'Ἱ'; i++; break;
                    case 'O': toReturn += 'Ὁ'; i++; break;
                    case 'R': toReturn += 'Ῥ'; i++; break;
                    case 'U': toReturn += 'Ὑ'; i++; break;
                    case 'W': toReturn += 'Ὡ'; i++; break;
                    case 'a': toReturn += 'ἁ'; i++; break;
                    case 'ã': toReturn += 'ᾁ'; i++; break;
                    case 'e': toReturn += 'ἑ'; i++; break;
                    case 'h': toReturn += 'ἡ'; i++; break;
                    case 'i': toReturn += 'ἱ'; i++; break;
                    case 'o': toReturn += 'ὁ'; i++; break;
                    case 'r': toReturn += 'ῥ'; i++; break;
                    case 'u': toReturn += 'ὑ'; i++; break;
                    case 'w': toReturn += 'ὡ'; i++; break;
                    case '~': i++; iotaSubWithAsper(input[i+1]); break;
                    default: toReturn += "'";
                }
            }
            function spiritusLenis(nextChar) { // (soft breathing)
                switch (nextChar) {
                    case 'A': toReturn += 'Ἀ'; i++; break;
                    case 'Ã': toReturn += 'ᾈ'; i++; break;
                    case 'E': toReturn += 'Ἐ'; i++; break;
                    case 'H': toReturn += 'Ἠ'; i++; break;
                    case 'I': toReturn += 'Ἰ'; i++; break;
                    case 'O': toReturn += 'Ὀ'; i++; break;
                    case 'U': toReturn += '?'; i++; break;
                    case 'W': toReturn += 'Ὠ'; i++; break;
                    case 'a': toReturn += 'ἀ'; i++; break;
                    case 'ã': toReturn += 'ᾀ'; i++; break;
                    case 'e': toReturn += 'ἐ'; i++; break;
                    case 'h': toReturn += 'ἠ'; i++; break;
                    case 'i': toReturn += 'ἰ'; i++; break;
                    case 'o': toReturn += 'ὀ'; i++; break;
                    case 'u': toReturn += 'ὐ'; i++; break;
                    case 'w': toReturn += 'ὠ'; i++; break;
                    case '~': i++; iotaSubWithLenis(input[i+1]); break;
                    default: toReturn += "`";
                }
            }
            function iotaSub(nextChar) {
                switch (nextChar) {
                    case 'A': toReturn += 'ᾼ'; i++; break;
                    case 'Á': toReturn += 'ᾉ'; i++; break;
                    case 'À': toReturn += 'ᾈ'; i++; break;
                    case 'H': toReturn += 'ῌ'; i++; break;
                    case 'W': toReturn += 'ῼ'; i++; break;
                    case 'a': toReturn += 'ᾳ'; i++; break;
                    case 'á': toReturn += 'ᾁ'; i++; break;
                    case 'à': toReturn += 'ᾀ'; i++; break;
                    case 'h': toReturn += 'ῃ'; i++; break;
                    case 'w': toReturn += 'ῳ'; i++; break;
                    case "'": i++; iotaSubWithAsper(input[i+1]); break;
                    case '`': i++; iotaSubWithLenis(input[i+1]); break;
                    default: toReturn += "~";
                }
            }
            function iotaSubWithAsper(nextChar) {
                switch (nextChar) {
                    case 'A': toReturn += 'ᾉ'; i++; break;
                    case 'H': toReturn += 'ᾙ'; i++; break;
                    case 'W': toReturn += 'ᾩ'; i++; break;
                    case 'a': toReturn += 'ᾁ'; i++; break;
                    case 'h': toReturn += 'ᾑ'; i++; break;
                    case 'w': toReturn += 'ᾡ'; i++; break;
                    default: toReturn += '';
                }
            }
            function iotaSubWithLenis(nextChar) {
                switch (nextChar) {
                    case 'A': toReturn += 'ᾈ'; i++; break;
                    case 'H': toReturn += 'ᾘ'; i++; break;
                    case 'W': toReturn += 'ᾨ'; i++; break;
                    case 'a': toReturn += 'ᾀ'; i++; break;
                    case 'h': toReturn += 'ᾐ'; i++; break;
                    case 'w': toReturn += 'ᾠ'; i++; break;
                    default: toReturn += '';
                }
            }

            function sigmaSigmaOnTheWall(nextChar) {
                const whoIsTheSkibidiestOfThemAll = [' ', ',', '.', ')', '-']
                if (whoIsTheSkibidiestOfThemAll.includes(nextChar) || (input.length -1) == i) {
                    toReturn += 'ς'
                } else {
                    toReturn += 'σ'
                }
            }
        }
        
    }
   
    if (toReturn.replace(/\s/g, '') == '') {
        toReturn = 'Typ iets!'
    }


    return toReturn;
}

