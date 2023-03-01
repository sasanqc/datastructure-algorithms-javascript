var runningSum = function (nums) {
  let sum = [];
  let accSum = 0;
  for (let i = 0; i < nums.length; i++) {
    accSum += nums[i];
    sum[i] = accSum;
  }
  return sum;
};

console.log(runningSum([1, 1, 1, 1, 2]));
