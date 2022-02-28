


//001-------------------------------containsDuplicate--------------------------------------//
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  Example 1:

//  Input: nums = [1,2,3,1]
//  Output: true
//  Example 2:
 
//  Input: nums = [1,2,3,4]
//  Output: false
//  Example 3:
 
//  Input: nums = [1,1,1,3,3,4,3,2,4,2]
//  Output: true

//использование множества для решения задачи
const containsDuplicate = function(nums) {
    const numbers = new Set();
    for(item of nums) {
        if (numbers.has(item))
            return true;
        numbers.add(item);
    }
    return false;
};

console.log(containsDuplicate([4,1,2,3,4]));

//использование сортировки для решения задачи - мой вариант
const containsDuplicate1 = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1])
            return true;
    }
    return false;
};

console.log(containsDuplicate1([4,1,2,3,4]));
//-----------------------------------------------------------------------------------------//



//002---------------------------------singleNumber--------------------------------------------//
/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 * 
 * Input: nums = [4,1,2,1,2]
   Output: 4
 */
//    Example 1:
//    Input: nums = [2,2,1]
//    Output: 1

//    Example 2:
//    Input: nums = [4,1,2,1,2]
//    Output: 4

//    Example 3:
//    Input: nums = [1]
//    Output: 1

//использование маски для решения задачи и XOR
 const singleNumber = function(nums) {
    let mask = 0;
    for (item of nums)
        mask ^= item;   //суммируем элементы. Если элементы повторяются, то они самоуничтожаются
    return mask;
};

console.log(singleNumber([4,1,2,1,2]));
//-----------------------------------------------------------------------------------------//


//003---------------------------------missingNumber--------------------------------------//
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
// 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
// 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
// 8 is the missing number in the range since it does not appear in nums.

//вариант с суммой арифметичской прогрессии
const missingNumber = function(nums) {
    const len = nums.length;
    const sum = nums.reduce((a, b) => {
        return a + b;
      });
    const sumAriph = (len * (len + 1)) / 2;  
    return sumAriph - sum;
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// мой вариант с сортировкой
const missingNumber1 = function(nums) {
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

console.log(missingNumber1([9,6,4,2,3,5,7,0,1]));
//-----------------------------------------------------------------------------------------//


//039--------------------------------Majority Element---------------------------------------------//
/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/majority-element/
 * Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.

    Example 1:
    Input: nums = [3,2,3]
    Output: 3

    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
 */

//вариант 1
const majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};
console.log(majorityElement([3,2,3,2]));

//вариант 2 - наиболее интересный и быстрый
const majorityElement1 = function(nums) {
    let vote = 0;
    let result;
    for(item of nums) {
        if (vote === 0) 
            result = item;
        if (result === item)
            vote++;
        else
            vote--;
    }
    return result;
};
console.log(majorityElement1([3,2,3,2]));

//-----------------------------------------------------------------------------------------//