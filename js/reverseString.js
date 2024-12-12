function reverseString(str) {
    var i = str.length - 1;
    // str = str.split("");
    new_str = "";
    while (i >= 0) {
        new_str += str[i];
        i--;
    }
    return new_str;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("")); // ""
console.log(reverseString("a")); // "a"
console.log(reverseString("racecar")); // "racecar"
