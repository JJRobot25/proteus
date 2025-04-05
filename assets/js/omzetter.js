import letterMap from "./letterMap.js";

const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

window.onload = function() {
    textInput.addEventListener('input', function() {
        textOutput.textContent = replaceLetters(textInput.value);
    });

    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            navigator.clipboard.writeText(textOutput.textContent);
            textInput.value = '';
        }
    })
}

function updateText(e) {
    textOutput.textContent = replaceLetters(e.target.value);
}

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

            case '+': plus(); break;

            case '-': type(); break;

            case '*': ending(); break;

            case '\\': escape(input[i+1]); break;

            // Turn into equivalent Greek letter (from letterMap), or stay the same if no match is present
            default:
                if (letterMap.has(currentChar)) {
                    toRet(letterMap.get(currentChar));
                } else {
                    toRet(currentChar);
                }
                break;
            
            function spiritusAsper(nextChar) { // (hard breathing)
                switch (nextChar) {
                    case 'A': toRet('Ἁ'); i++; break;
                    case 'Ã': toRet('ᾉ'); i++; break;
                    case 'E': toRet('Ἑ'); i++; break;
                    case 'H': toRet('Ἡ'); i++; break;
                    case 'I': toRet('Ἱ'); i++; break;
                    case 'O': toRet('Ὁ'); i++; break;
                    case 'R': toRet('Ῥ'); i++; break;
                    case 'U': toRet('Ὑ'); i++; break;
                    case 'W': toRet('Ὡ'); i++; break;
                    case 'a': toRet('ἁ'); i++; break;
                    case 'ã': toRet('ᾁ'); i++; break;
                    case 'e': toRet('ἑ'); i++; break;
                    case 'h': toRet('ἡ'); i++; break;
                    case 'i': toRet('ἱ'); i++; break;
                    case 'o': toRet('ὁ'); i++; break;
                    case 'r': toRet('ῥ'); i++; break;
                    case 'u': toRet('ὑ'); i++; break;
                    case 'w': toRet('ὡ'); i++; break;
                    case '~': i++; iotaSubWithAsper(input[i+1]); break;
                    default: toRet("'");
                }
            }
            function spiritusLenis(nextChar) { // (soft breathing)
                switch (nextChar) {
                    case 'A': toRet('Ἀ'); i++; break;
                    case 'Ã': toRet('ᾈ'); i++; break;
                    case 'E': toRet('Ἐ'); i++; break;
                    case 'H': toRet('Ἠ'); i++; break;
                    case 'I': toRet('Ἰ'); i++; break;
                    case 'O': toRet('Ὀ'); i++; break;
                    case 'U': toRet('?'); i++; break;
                    case 'W': toRet('Ὠ'); i++; break;
                    case 'a': toRet('ἀ'); i++; break;
                    case 'ã': toRet('ᾀ'); i++; break;
                    case 'e': toRet('ἐ'); i++; break;
                    case 'h': toRet('ἠ'); i++; break;
                    case 'i': toRet('ἰ'); i++; break;
                    case 'o': toRet('ὀ'); i++; break;
                    case 'u': toRet('ὐ'); i++; break;
                    case 'w': toRet('ὠ'); i++; break;
                    case '~': i++; iotaSubWithLenis(input[i+1]); break;
                    default: toRet("`");
                }
            }
            function iotaSub(nextChar) {
                switch (nextChar) {
                    case 'A': toRet('ᾼ'); i++; break;
                    case 'Á': toRet('ᾉ'); i++; break;
                    case 'À': toRet('ᾈ'); i++; break;
                    case 'H': toRet('ῌ'); i++; break;
                    case 'W': toRet('ῼ'); i++; break;
                    case 'a': toRet('ᾳ'); i++; break;
                    case 'á': toRet('ᾁ'); i++; break;
                    case 'à': toRet('ᾀ'); i++; break;
                    case 'h': toRet('ῃ'); i++; break;
                    case 'w': toRet('ῳ'); i++; break;
                    case "'": i++; iotaSubWithAsper(input[i+1]); break;
                    case '`': i++; iotaSubWithLenis(input[i+1]); break;
                    default: toRet("~");
                }
            }
            function iotaSubWithAsper(nextChar) {
                switch (nextChar) {
                    case 'A': toRet('ᾉ'); i++; break;
                    case 'H': toRet('ᾙ'); i++; break;
                    case 'W': toRet('ᾩ'); i++; break;
                    case 'a': toRet('ᾁ'); i++; break;
                    case 'h': toRet('ᾑ'); i++; break;
                    case 'w': toRet('ᾡ'); i++; break;
                    default: toRet('');
                }
            }
            function iotaSubWithLenis(nextChar) {
                switch (nextChar) {
                    case 'A': toRet('ᾈ'); i++; break;
                    case 'H': toRet('ᾘ'); i++; break;
                    case 'W': toRet('ᾨ'); i++; break;
                    case 'a': toRet('ᾀ'); i++; break;
                    case 'h': toRet('ᾐ'); i++; break;
                    case 'w': toRet('ᾠ'); i++; break;
                    default: toRet('');
                }
            }

            function sigmaSigmaOnTheWall(nextChar) {
                const whoIsTheSkibidiestOfThemAll = [' ', ',', '.', ')', '-']
                if (whoIsTheSkibidiestOfThemAll.includes(nextChar) || (input.length -1) == i) {
                    toRet('ς');
                } else {
                    toRet('σ');
                }
            }

            function plus() {
                switch (input[i+1]) {
                    case 'n': toRet('+nom'); i++; break;
                    case 'g': toRet('+gen'); i++; break;
                    case 'd': toRet('+dat'); i++; break;
                    case 'a': toRet('+acc'); i++; break;
                    case 'i': toRet('+inf'); i++; break;
                    case 'c': toRet('+con'); i++; break;
                    case 'p': 
                        if(input[i+2] == 'p') {
                            toRet('+ptc prs'); i+=2; 
                        } else {
                            toRet('+ptc'); i++;
                        }
                        break;
                
                    default: toRet('+');
                }
            }

            function type() {
                switch (input[i+1]) {
                    case 'a': toRet('aor'); i++; break;
                    case 'b': toRet('bijw'); i++; break;
                    case 'v': 
                        if(input[i+2] == 'v') {
                            toRet('voorvoegsel'); i+=2; 
                        } else if (input[i+2] == 'w') {
                            toRet('voegw'); i+=2;
                        }
                        break;
                    case 'm': 
                        if(input[i+2] == 'v') {
                            toRet('m/v'); i+=2; 
                        } else {
                            toRet('mv'); i++;
                        }
                        break;
                    default: toRet('-');
                }
            }

            function ending() {
                switch (input[i+1]) {
                    case 'h': toRet('ος, -η, -ον'); i++; break;
                    case 'a': toRet('ος, -α, -ον'); i++; break;
                    case 'u': toRet('υς, -εια, -υ'); i++; break;
                    default: toRet('*');
                }
            }

            function escape(nextChar) {
                toRet(nextChar); i++;
            }

            function toRet(toRet) {
                toReturn += toRet;
            }
        }
        
    }
   
    if (toReturn.replace(/\s/g, '') == '') {
        toReturn = 'Typ iets!'
    }


    return toReturn;
}
