import assert from 'assert';
import Queue from './queue';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should exists', () => {
    assert.equal(typeof queue, 'object');
  });

  describe('enqueue()', () => {
    it('should have a enqueue method', () => {
      assert.equal(typeof queue.enqueue, 'function');
    });

    it('should add an element to the queue', () => {
      let element = queue.enqueue('plop');
      let element2 = queue.enqueue('kikoo');

      assert.notEqual(typeof element, 'undefined');
      assert.equal(element, queue.collection[0]);
      assert.equal(element2, queue.collection[1]);
    });
  });

  describe('dequeue()', () => {
    it('should have a dequeue method', () => {
      assert.equal(typeof queue.dequeue, 'function');
    });

    it('should return the front element of the queue', () => {
      let elementOne = queue.enqueue('elementOne');
      let elementTwo = queue.enqueue('elementTwo');
      let elementThree = queue.enqueue('elementThree');

      assert.equal(elementOne, queue.dequeue());
      assert.equal(elementTwo, queue.dequeue());
    });

    it('should remove the front element of the queue', () => {
      let elementOne = queue.enqueue('elementOne');
      let elementTwo = queue.enqueue('elementTwo');
      let elementThree = queue.enqueue('elementThree');

      assert.equal(queue.collection.length, 3);
      queue.dequeue();
      assert.equal(queue.collection.length, 2);
      queue.dequeue();
      assert.equal(queue.collection.length, 1);
    });
  });

  describe('front()', () => {
    it('should have a front method', () => {
      assert.equal(typeof queue.front, 'function');
    });

    it('should return the front element of the queue and not remove it', () => {
      let elementOne = queue.enqueue('elementOne');
      let elementTwo = queue.enqueue('elementTwo');
      let elementThree = queue.enqueue('elementThree');

      assert.equal(elementOne, queue.front());
      assert.equal(elementOne, queue.front());
      assert.equal(elementOne, queue.front());
    });
  });

  describe('size()', () => {
    it('should have a size method', () => {
      assert.equal(typeof queue.size, 'function');
    });
  });

  describe('isEmpty()', () => {
    it('should have a isEmpty method', () => {
      assert.equal(typeof queue.isEmpty, 'function');
    });

    it('should return true when queue is empty', () => {
      assert.equal(queue.isEmpty(), true);
    });

    it('should return false when queue is not empty', () => {
      queue.enqueue('plop');

      assert.equal(queue.isEmpty(), false);
    });
  });
});