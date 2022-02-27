/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Input: nums = [4,1,2,1,2]
    Output: 4
 */
 const singleNumber = function(nums) {
    let mask = 0;
    for (item of nums)
        mask ^= item;
    return mask;
};

singleNumber([4,1,2,1,2]);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = function(nums) {
    const numbers = new Set();
    for(item of nums) {
        if (numbers.has(item))
            return true;
        numbers.add(item);
    }
    return false;
};

containsDuplicate([4,1,2,3,4]);

const containsDuplicate1 = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1])
            return true;
    }
    return false;
};

containsDuplicate1([4,1,2,3,4]);

// const containsDuplicate2 = function(nums) {
//     nums.sort((a, b) => a - b);
//     while(nums.length > 0) {
        
//     }
// };

// containsDuplicate2([4,1,2,3,4]);

const missingNumber = function(nums) {
    nums.sort((a,b) => a - b);
    let num = nums[nums.length - 1];
    const lastElement = num;
    while(nums.length > 0) {
        const numPop = nums.pop();
        if ((num - numPop) === 2)
            return num - 1;
        else
            num = numPop;
    }
    if (num !== 0)
        return num - 1;
    else
        return  lastElement + 1;
};

console.log(missingNumber([1,2]));