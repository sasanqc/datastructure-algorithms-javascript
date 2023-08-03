class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(el) {
    this.data[this.length] = el;
    this.length++;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  insert(index, el) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = el;
    this.length++;
  }
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.push("hi");
myArray.push("nice");
myArray.push("world");
myArray.insert(1, " pretty");

console.log(myArray);
myArray.delete(1);
console.log(myArray);
