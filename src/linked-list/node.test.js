import assert from 'assert';
import Node from './node';

describe('Node', () => {

  describe('name', () => {
    it('should have a name', () => {
      let node = new Node('Plop');
      assert.equal(node.name, 'Plop');
    });
  });

  describe('next', () => {
    it('should have a next attribute', () => {
      let node = new Node('Plop');
      assert.equal(node.next, null);
    });
  });
});