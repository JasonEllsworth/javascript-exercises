const fibonacci = function(s) {
   let fibarray = [0, 1, 1]
    let newFibNum;
   let j = 2;
   let findNum = s;


   //finished and working perfectly.
    for (let i = 1; i < 99 ; i++) {
        for (;;) {
            newFibNum = fibarray[i] + fibarray[j];
            fibarray.push(newFibNum);
            j++;
            break;
        }
    }

    let arrayValue = fibarray[findNum];
    return arrayValue;

};

// Do not edit below this line
module.exports = fibonacci;
