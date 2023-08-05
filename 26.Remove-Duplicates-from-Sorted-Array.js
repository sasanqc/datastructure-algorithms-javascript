var removeDuplicates = function (nums) {
  const numsCopy = [...nums];
  nums.length = 0;
  nums.push(numsCopy[0]);
  for (let index = 1; index < numsCopy.length; index++) {
    if (numsCopy[index] !== nums[nums.length - 1]) {
      nums.push(numsCopy[index]);
    }
  }
  return nums.length;
};
const nums = [1];
removeDuplicates(nums);
console.log(nums);

//better solution
var removeDuplicates2 = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
