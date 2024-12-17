function removeDups(numbers) {
    let hash = {};

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        hash[element] = 0;
    }
    return Object.keys(hash);
}