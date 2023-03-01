var pivotIndex = function (nums) {
  let leftArray = [];
  let rightArray = [];
  let leftSideSum = 0;
  let rightSideSum = 0;

  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    leftArray[currentIndex] = leftSideSum;
    leftSideSum += nums[currentIndex];

    rightArray[nums.length - currentIndex - 1] = rightSideSum;
    rightSideSum += nums[nums.length - currentIndex - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (rightArray[i] === leftArray[i]) {
      return i;
    }
  }

  return -1;
};
console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));
