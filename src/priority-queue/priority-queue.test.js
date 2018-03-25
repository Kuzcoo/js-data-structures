import assert from 'assert';
import PriorityQueue from './priority-queue';

describe('PriorityQueue', () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  it('should exists', () => {
    assert.equal(typeof priorityQueue, 'object');
  });

  describe('enqueue()', () => {
    it('should have a enqueue method', () => {
      assert.equal(typeof priorityQueue.enqueue, 'function');
    });

    it('should add item to the collection ordered by the second index', () => {
      let itemOne = priorityQueue.enqueue(['one', 3]);
      let itemTwo = priorityQueue.enqueue(['two', 1]);
      let itemThree = priorityQueue.enqueue(['three', 5]);
      let itemFour = priorityQueue.enqueue(['four', 2]);

      assert.equal(itemTwo, priorityQueue.collection[0]);
      assert.equal(itemFour, priorityQueue.collection[1]);
      assert.equal(itemOne, priorityQueue.collection[2]);
      assert.equal(itemThree, priorityQueue.collection[3]);
    });
  });
  
  describe('dequeue()', () => {
    it('should have a dequeue method', () => {
      assert.equal(typeof priorityQueue.dequeue, 'function');
    });

    it('should get the front element of the queue and remove it', () => {
      let itemOne = priorityQueue.enqueue(['one', 3]);
      let itemTwo = priorityQueue.enqueue(['two', 1]);
      let itemThree = priorityQueue.enqueue(['three', 5]);

      assert.equal(priorityQueue.size(), 3);
      assert.equal(priorityQueue.dequeue(), itemTwo[0]);
      assert.equal(priorityQueue.size(), 2);
    });
  });

  describe('front()', () => {
    it('should have a front method', () => {
      assert.equal(typeof priorityQueue.front, 'function');
    });

    it('should return the front element of the queue without removing it', () => {
      let itemOne = priorityQueue.enqueue(['one', 3]);
      let itemTwo = priorityQueue.enqueue(['two', 1]);
      let itemThree = priorityQueue.enqueue(['three', 5]);

      assert.equal(priorityQueue.size(), 3);
      assert.equal(priorityQueue.front(), itemTwo[0]);
      assert.equal(priorityQueue.size(), 3);
    });
  });
  
  describe('size()', () => {
    it('should have a size method', () => {
      assert.equal(typeof priorityQueue.size, 'function');
    });

    it('should return the size of the queue', () => {
      let itemOne = priorityQueue.enqueue(['one', 3]);
      let itemTwo = priorityQueue.enqueue(['two', 1]);
      let itemThree = priorityQueue.enqueue(['three', 5]);

      assert.equal(priorityQueue.size(), 3);
      priorityQueue.dequeue();
      assert.equal(priorityQueue.size(), 2);
    });
  });
  
  describe('isEmpty()', () => {
    it('should have a isEmpty method', () => {
      assert.equal(typeof priorityQueue.isEmpty, 'function');
    });

    it('should return true if the queue is empty', () => {
      assert.equal(priorityQueue.isEmpty(), true);
    });

    it('should return false if the queue is not empty', () => {
      priorityQueue.enqueue(['one', 3]);
      assert.equal(priorityQueue.isEmpty(), false);
    });
  });
});