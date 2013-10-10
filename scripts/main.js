require.config({
  
});

require([
  'Node',
  'LinkedList',
  'DoublyLinkedList'
], function (Node, LinkedList, DoublyLinkedList) {
  window.LinkedList = LinkedList;
  window.DoublyLinkedList = DoublyLinkedList;
});