import assert from 'assert';
import Stack from './stack';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should exists', () => {
    assert.equal(typeof stack, 'object');
  });

  describe('push()', () => {
    it('should have a push method', () => {
      assert.equal(typeof stack.push, 'function');
    });

    it('should add an item to the stack', () => {
      let item = stack.push('plop');
      let item2 = stack.push('hello');

      assert.equal(item, stack.collection[0]);
      assert.equal(item2, stack.collection[1]);
    });
  });

  describe('pop()', () => {
    it('should have a pop method', () => {
      assert.equal(typeof stack.pop, 'function');
    });

    it('should return the top element of the stack', () => {
      let item = stack.push('plop');

      assert.equal(item, stack.pop());
    });

    it('should remove the top element of the stack', () => {
      let item = stack.push('plop');

      assert.equal(1, stack.collection.length);
      stack.pop();
      assert.equal(0, stack.collection.length);
    });
  });

  describe('peek()', () => {
    it('should have a peek method', () => {
      assert.equal(typeof stack.peek, 'function');
    });

    it('should return the top element of the stack', () => {
      let item = stack.push('plop');

      assert.equal(item, stack.peek());
    });

    it('should not remove the top element of the stack', () => {
      let item = stack.push('plop');
      assert.equal(1, stack.collection.length);
      stack.peek();
      assert.equal(1, stack.collection.length);
    });
  });

  describe('isEmpty()', () => {
    it('should have a isEmpty method', () => {
      assert.equal(typeof stack.isEmpty, 'function');
    });

    it('should return true when stack is empty', () => {
      assert.equal(stack.isEmpty(), true);
    });

    it('should return false when stack is not empty', () => {
      stack.push('plop');

      assert.equal(stack.isEmpty(), false);
    });
  });

  describe('clear()', () => {
    it('should have a clear method', () => {
      assert.equal(typeof stack.clear, 'function');
    });

    it('should empty the stack', () => {
      stack.push('plop');
      stack.push('hello');

      assert.equal(stack.isEmpty(), false);
      stack.clear();
      assert.equal(stack.isEmpty(), true);
    });
  });
});