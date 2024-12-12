function findLargest(arr) {
    var largest = undefined;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

    if(element > largest || largest === undefined)
        largest = element;
    }
    return largest;
}
console.log(findLargest([1, 5, 3, 9, 2])); // 9
console.log(findLargest([-1, -5, -3, -9, -2])); // -1
console.log(findLargest([100])); // 100
console.log(findLargest([])); // undefined
console.log(findLargest([3.5, 2.1, 5.6, 4.8])); // 5.6
