/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indeces = new Object();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (Object.keys(indeces).includes(target - num)){
            indeces[target-num] = i;
        }
        
        
    }
    return indeces;
};

console.log(twoSum([0,1,2,3,4,5], 1))