function mergeSortedArrays(array1, array2) {
  //naive solution
  let result = [];
  let indexes = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (!indexes.includes(j) && array2[j] <= array1[i]) {
        result.push(array2[j]);
        indexes.push(j);
      }
    }
    result.push(array1[i]);
  }
  return result;
}
//a better solution
function mergeSortedArrays2(array1, array2) {
  const result = [];
  let i = 1;
  let j = 1;
  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  let array1Item = array1[0];
  let array2Item = array2[0];
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (array2Item === undefined || array1Item < array2Item) {
      result.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      result.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return result;
}
console.log(mergeSortedArrays2([1, 2, 5, 7], [0, 3, 4]));
