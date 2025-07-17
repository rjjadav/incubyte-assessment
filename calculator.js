
function add(numbers) {

    //Return 0 if empty string passed
    if (!numbers) return 0;

    let delimiter = /[\n,]/;
    let numberBlock = numbers;

    if (numberBlock.startsWith('//')) {
        // If input starts with //, we fetch the custom delimiter before \n.
        const delimiterEnd = numbers.indexOf('\n');        
        const delimiterSymbols = numbers.substring(2, delimiterEnd);
        //Build and escape characters in RegExp  
        delimiter = new RegExp(`[${escapeRegExp(delimiterSymbols)}\n]`);
        // Get the actual number block from string after processing delimiters
        numberBlock = numbers.substring(delimiterEnd + 1);

    }

    const numbersArr = numberBlock.split(delimiter);
    const stringArr = numbersArr.filter(element => isNaN(element));

    if(stringArr.length) {
        throw new Error(`Strings are not allowed: ${stringArr.join(',')}`)
    }

    const negativeNumbers = numbersArr.filter(number => parseInt(number) < 0);
    if(negativeNumbers.length) {
        throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(',')}`)
    }
    
    return numbersArr
        .reduce((sum, current) => sum + parseInt(current), 0);
}

// Utility to escape special regex characters in custom delimiters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
    add
}