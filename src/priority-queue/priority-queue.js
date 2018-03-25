export default class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(item) {
    if (this.isEmpty()) {
      this.collection.push(item);
      return item;
    }

    for (let i = 0; i < this.size(); i++) {
      if (item[1] < this.collection[i][1]) {
        return this.collection.splice(i, 0, item) && item;
      }
    }

    return this.collection.push(item) && item;
  }

  dequeue() {
    return this.collection.shift()[0];
  }

  front() {
    return this.collection[0][0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}