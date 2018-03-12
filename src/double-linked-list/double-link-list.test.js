import assert from 'assert';
import DoubleLinkedList from './double-linked-list';

describe('DoubleLinkedList', () => {
  var doubleLinkedList;

  beforeEach(() => {
    doubleLinkedList = new DoubleLinkedList();
  });

  it('should exists', () => {
    assert.equal(typeof doubleLinkedList, 'object');
  });

  describe('add()', () => {
    it('should have an "add" method', () => {
      assert.equal(typeof doubleLinkedList.add, 'function');
    });

    it('should add an item to the list', () => {
      let node = doubleLinkedList.add('Plop');

      assert.equal(doubleLinkedList.head, node);
    });

    it('should keeps tracks to the previous node', () => {
      let firstNode = doubleLinkedList.add('Plop');
      let secondNode = doubleLinkedList.add('Yup');
      let thirdNode = doubleLinkedList.add('Kikoo');

      assert.equal(secondNode.prev, firstNode);
      assert.equal(thirdNode.prev, secondNode);
    });
  });

  describe('remove()', () => {
    it('should have an "remove" method', () => {
      assert.equal(typeof doubleLinkedList.remove, 'function');
    });

    it('should return null when removing item from empty list', () => {
      assert.equal(doubleLinkedList.remove('Plop'), null);
    });

    it('should remove the first item from the list', () => {
      let firstNode = doubleLinkedList.add('Plop');
      let secondNode = doubleLinkedList.add('Kikoo');

      doubleLinkedList.remove('Plop');
      assert.equal(doubleLinkedList.head, secondNode);
    });

    it('should remove the last item from the list', () => {
      let firstNode = doubleLinkedList.add('Plop');
      let secondNode = doubleLinkedList.add('Kikoo');

      doubleLinkedList.remove('Kikoo');
      assert.equal(doubleLinkedList.tail, firstNode);
    });
  });
});