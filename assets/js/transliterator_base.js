export function replaceLetters(input) {
    let result = '';
    let escaped = false;
    for (let i = 0; i < input.length; i++) {
        // make escaping possible
        if (input[i] === '*') {
            escaped = true;
        } else {
            if (escaped || !(letters.has(input[i]))) {
                result += input[i]; //don't replace letter if escaped (or it can't be replaced)
            } else {
                result += letters.get(input[i]); //go brrrrrrrr
            }
        }

        // end escape
        if (input[i] === ' ') {
            escaped = false;
        }
    }
   
    if (result.replace(/\s/g, '') == '') {
        result = 'Typ iets!'
    }

    result = result.normalize("NFC"); //type shit

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
    // Punctiation
    [';', ';'],
    [':', '·']
])
