
function add(numbers) {

    //Return 0 if empty string passed
    if (!numbers) return 0;

    return numbers.split(",").map(number => parseInt(number)).reduce((sum, current) => sum + current, 0);
}

module.exports = {
    add
}