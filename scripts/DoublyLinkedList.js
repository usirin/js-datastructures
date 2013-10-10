define(['Node', 'LinkedList'], function(Node, LinkedList) {
  var DoublyLinkedList = function() {
    LinkedList.apply(this, arguments);
    this.tail = null;
  }

  return DoublyLinkedList;
});