import Node from './node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  add(name) {
    this.length++;    

    if (!this.head) {
      this.head = new Node(name);
      this.tail = this.head;
      return this.tail;
    }

    this.tail.next = new Node(name);
    this.tail = this.tail.next;

    return this.tail;
  }

  remove(name) {
    var currentNode = this.head;
    var lastNode = null;

    if (currentNode.name === name) {
      this.head = currentNode.next;
      this.length--;
      return currentNode;
    }

    while (currentNode) {
      if (currentNode.name === name) {
        lastNode.next = currentNode.next;
        this.length--;
        return currentNode;
      }

      lastNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  indexOf(name) {
    var currentNode = this.head;
    var index = 0;

    while (currentNode) {
      if (currentNode.name === name) {
        return index;
      }

      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }

  elementAt(index) {
    var currentNode = this.head;
    var _index = 0;

    if (index < 0 || index > this.size()-1) {
      return null;
    }

    while (currentNode) {
      if (_index === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
      _index++;
    }
  }

  removeAt(index) {
    let node = this.elementAt(index);

    return this.remove(node.name);
  }

  addAt(index, name) {
    let newNode = new Node(name);
    let previousNode;

    if (index < 0 || index > this.size()) {
      return false;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    previousNode = this.elementAt(index-1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }
}

export default LinkedList;