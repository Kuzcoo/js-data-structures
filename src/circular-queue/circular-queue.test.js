import assert from 'assert';
import CircularQueue from './circular-queue';

describe('CircularQueue', () => {
  let circularQueue;

  beforeEach(() => {
    circularQueue = new CircularQueue(2);
  });

  it('should exists', () => {
    assert.equal(typeof circularQueue, 'object');
  });

  describe('print', () => {
    it('should have a print method', () => {
      assert.equal(typeof circularQueue.print, 'function');
    });

    it('should return queue', () => {
      assert.equal(circularQueue.print(), circularQueue.queue);
      circularQueue.enqueue('itemOne');
      assert.equal(circularQueue.print(), circularQueue.queue);
    });
  });

  describe('enqueue', () => {
    it('should have a enqueue method', () => {
      assert.equal(typeof circularQueue.enqueue, 'function');
    });

    it('should add item to the queue at the write pointer if its position is null', () => {
      let itemOne = 'itemOne';
      let itemTwo = 'itemTwo';
      let itemThree = 'itemThree';

      circularQueue.enqueue(itemOne);
      circularQueue.enqueue(itemTwo);
      circularQueue.enqueue(itemThree);
      assert.equal(circularQueue.print()[0], itemOne);
      assert.equal(circularQueue.print()[1], itemTwo);
      assert.equal(circularQueue.print()[1], itemTwo);
    });

    it('should return null if the item at the queue has not been read yet', () => {
      let itemOne = 'itemOne';
      let itemTwo = 'itemTwo';
      let itemThree = 'itemThree';

      assert.equal(circularQueue.enqueue(itemOne), itemOne);
      assert.equal(circularQueue.enqueue(itemTwo), itemTwo);
      assert.equal(circularQueue.enqueue(itemThree), null);
    });

    it('should goes back to the beginning of the queue when it got at the end of the queue', () => {
      let itemOne = 'itemOne';
      let itemTwo = 'itemTwo';
      let itemThree = 'itemThree';

      circularQueue.enqueue(itemOne);
      circularQueue.enqueue(itemTwo);
      circularQueue.enqueue(itemThree);
      assert.equal(circularQueue.write, 0);
    });

    it('should not increment the read pointer if there is nothing at its position and return null', () => {
      circularQueue.enqueue('itemOne');
      circularQueue.enqueue('itemTwo');

      assert.equal(circularQueue.enqueue('itemThree'), null);
      assert.equal(circularQueue.write, 0);
    });
  });

  describe('dequeue', () => {
    it('should have a dequeue method', () => {
      assert.equal(typeof circularQueue.dequeue, 'function');
    });

    it('should return the item at read position and replace it with null', () => {
      let itemOne = 'itemOne';
      let itemTwo = 'itemTwo';

      circularQueue.enqueue(itemOne);
      circularQueue.enqueue(itemTwo);
      assert.equal(circularQueue.dequeue(), itemOne);
      assert.equal(circularQueue.print()[0], null);
      assert.equal(circularQueue.dequeue(), itemTwo);
      assert.equal(circularQueue.print()[1], null);
    });

    it('should goes back to the beginning of the queue when it got at the end of the queue', () => {
      let itemOne = 'itemOne';
      let itemTwo = 'itemTwo';
      let itemThree = 'itemThree';

      circularQueue.dequeue();
      circularQueue.dequeue();
      circularQueue.dequeue();
      assert.equal(circularQueue.read, 0);
    });

    it('should not increment the read pointer if there is nothing at its position', () => {
      assert.equal(circularQueue.read, 0);
      circularQueue.dequeue();
      assert.equal(circularQueue.read, 0);
    });
  });
});