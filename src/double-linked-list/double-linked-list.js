class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;    
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    let newNode;

    if (!this.head) {
      newNode = new Node(data, null);
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode = new Node(data, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  remove(data) {
    var currentNode = this.head;
    let prevNode;

    if (this.length === 0) return null;

    if (currentNode.data === data) {
      this.head = this.head.next;
      this.head.prev = null;
      this.tail = this.head;
    } else {
      while (currentNode) {
        if (currentNode.data === data) {
          prevNode = currentNode.prev;
          prevNode.next = currentNode.next;

          if (!prevNode.next) {
            this.tail = prevNode;
          }
        }
        currentNode = currentNode.next;
      }
    }
  }
}

export default DoubleLinkedList;