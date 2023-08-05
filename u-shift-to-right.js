const myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
function shiftToRight(array, index) {
  for (let i = array.length - 1; i >= index + 1; i--) {
    array[i] = array[i - 1];
  }
  array[index] = "*";
}
shiftToRight(myArray, 2);
console.log(myArray);
// ["a", "b", "*" ,"*" ,"c", "d", "e", "f", "g", "h"];

function prepend(array, value) {
  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array;
}
// console.log(prepend([1, 2, 3, 0], 6));
