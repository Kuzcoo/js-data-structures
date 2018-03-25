export default class Stack {

  constructor() {
    this.collection = [];
  }

  push(item) {
    this.collection.push(item);

    return item;
  }

  pop() {
    return this.collection.pop();
  }

  peek() {
    return this.collection[this.collection.length-1];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  clear() {
    this.collection = [];
  }
}