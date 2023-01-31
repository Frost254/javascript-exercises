const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^A-Z0-9]/g, "");

  //Create a reversed string
    let reversedStr = newStr.split("").reverse().join("")
    return newStr === reversedStr ? true : false
};

// Do not edit below this line
module.exports = palindromes;
