class Linkedlist {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = { value, next: null };
    this.head.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(value) {
    const node = { value, next: this.head };
    this.head = node;
    this.length++;
    return this;
  }
}
const myLinkedList = new Linkedlist(10);

myLinkedList.append(5);
myLinkedList.prepend(15);
console.log(myLinkedList);
