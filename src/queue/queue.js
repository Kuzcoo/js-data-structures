export default class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    this.collection.push(element);
    return element;
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}