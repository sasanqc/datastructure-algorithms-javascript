var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  const numsCopy = [...nums];
  nums.length = 0;
  nums.push(numsCopy[0]);
  let dups = 0;
  for (let index = 1; index < numsCopy.length; index++) {
    if (numsCopy[index] !== nums[nums.length - 1]) {
      nums.push(numsCopy[index]);
      dups = 0;
    } else if (numsCopy[index] === nums[nums.length - 1] && dups === 0) {
      dups++;
      nums.push(numsCopy[index]);
    }
  }
  return nums.length;
};
const nums = [1, 1, 1, 2, 2, 2, 4];
//removeDuplicates(nums);

// better solution

var removeDuplicates2 = function (nums) {
  // keep the results in the first part of the array nums
  //remove duplicates but keep each unique at most twice < = 2

  for (let i = nums.length - 1; i >= 0; i--) {
    let target = nums[i - 2];
    console.log(nums.length, i);
    if (target === nums[i]) {
      nums.splice(i, 1);
    }
  }
  //check to see if element is seen more than 2 times, if so remove it from the array

  //return the number of unique elements
  return nums.length;
};
removeDuplicates2(nums);
console.log(nums);
