import assert from 'assert';
import LinkedList from './linked-list';
import Node from './node';

describe('Linked List', () => {

  var linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('add()', () => {
    it('should have an "add" method', () => {
      assert.equal('function', typeof linkedList.add);
    });

    it('should assign head to the first node added', () => {
      let node = linkedList.add('Plop');

      assert.equal(linkedList.head, node);
    });

    it('should assign last node added to previous node', () => {
      let prevNode = linkedList.add('Plop');
      let lastNode = linkedList.add('Kikoo');

      assert.equal(prevNode.next, lastNode);
    });
  });

  describe('remove()', () => {
    it('should have a "remove" method', () => {
      assert.equal(typeof linkedList.remove, 'function');
    });

    it('should reassign head to the second node when first removed', () => {
      linkedList.add('Plop');
      let secondNode = linkedList.add('Kikoo');

      linkedList.remove('Plop');

      assert.equal(linkedList.head, secondNode);
    });

    it('should reassign next reference of the removed node to the previous node', () => {
      let firstNode = linkedList.add('Plop');
      let secondNode = linkedList.add('Kikoo');
      let thirdNode = linkedList.add('Yup');

      linkedList.remove('Kikoo');
      assert.equal(firstNode.next, thirdNode);
    });
  });

  describe('size()', () => {
    it('should have a "size" method', () => {
      assert.equal(typeof linkedList.size, 'function');
    });

    it('should return the size of nodes in the linked list', () => {
      assert.equal(linkedList.size(), 0);
      linkedList.add('Plop');
      assert.equal(linkedList.size(), 1);
      linkedList.add('Kikoo');
      assert.equal(linkedList.size(), 2);
    });

    it('should decrease the length of linked list when node removed', () => {
      linkedList.add('Plop');
      linkedList.add('Kikoo');

      assert.equal(linkedList.length, 2);
      linkedList.remove('Plop');
      assert.equal(linkedList.length, 1);
    });
  });

  describe('isEmpty()', () => {
    it('should have a "isEmpty" method', () => {
      assert.equal(typeof linkedList.isEmpty, 'function');
    });

    it('should return true when linked list is empty', () => {
      assert.equal(linkedList.isEmpty(), true);
    });

    it('should return false when linked list is not empty', () => {
      linkedList.add('Plop');

      assert.equal(linkedList.isEmpty(), false);
    });
  });

  describe('indexOf()', () => {
    it('should have an "indexOf" method', () => {

      assert.equal(typeof linkedList.indexOf, 'function');
    });

    it('should return the index of the given element', () => {
      linkedList.add('Plop');
      linkedList.add('Kikoo');

      assert.equal(linkedList.indexOf('Plop'), 0);
      assert.equal(linkedList.indexOf('Kikoo'), 1);
    });
  });

  describe('elementAt()', () => {
    it('should have an "elementAt" method', () => {
      assert.equal(typeof linkedList.elementAt, 'function');
    });

    it('should return a node at a given index', () => {
      let firstNode = linkedList.add('Plop');
      let secondNode = linkedList.add('Kikoo');
      let thirdNode = linkedList.add('Yup');

      assert.equal(linkedList.elementAt(0), firstNode);
      assert.equal(linkedList.elementAt(1), secondNode);
      assert.equal(linkedList.elementAt(2), thirdNode);
    });
  });

  describe('removeAt()', () => {
    it('should have a "removeAt" method', () => {
      assert.equal(typeof linkedList.removeAt, 'function');
    });

    it('should decrease the size of the linked list', () => {
      linkedList.add('Plop');
      linkedList.add('Kikoo');

      assert.equal(linkedList.size(), 2);
      linkedList.removeAt(1);
      assert.equal(linkedList.size(), 1);
    });

    it('should return the removed node', () => {
      linkedList.add('Plop');
      let secondNode = linkedList.add('Kikoo');

      assert.equal(linkedList.removeAt(1), secondNode);
    });
  });

  describe('addAt()', () => {
    it('should have an "addAt" method', () => {
      assert.equal(typeof linkedList.addAt, 'function');
    });

    it('should add a node at a given index', () => {
      linkedList.add('Plop');
      linkedList.add('Kikoo');
      linkedList.add('Yup');

      linkedList.addAt(1, 'Hello');

      assert.equal(linkedList.indexOf('Hello'), 1);
      assert.equal(linkedList.indexOf('Kikoo'), 2);
      assert.equal(linkedList.indexOf('Yup'), 3);

      linkedList.addAt(0, 'Hey');
      assert.equal(linkedList.indexOf('Hey'), 0);
      assert.equal(linkedList.indexOf('Plop'), 1);
      assert.equal(linkedList.indexOf('Hello'), 2);
      assert.equal(linkedList.indexOf('Kikoo'), 3);
    });
  });
});