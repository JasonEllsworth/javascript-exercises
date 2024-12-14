const palindromes = function () {
    let args;
    let reverse;
    let punc;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === "!") {
            punc = arguments[i];
            console.log(punc);
        } else {
            args = arguments[i];
            console.log(args);
        }

    }
    reverse = args.split('').reverse().join('');

    if (reverse === args) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
