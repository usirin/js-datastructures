define(['DoublyNode'], function(Node) {
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  /**
   * Prepends an item to the start of the list.
   * @param  {mixed} data
   * @return {DoublyLinkedList}
   */
  DoublyLinkedList.prototype.prepend = function(data) {
    if(this._length === 0) {
      var newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this._length += 1;
      return this;
    }

    var restOfTheList = this.head;

    // create a new node.
    var newNode = new Node(data);

    // attach rest of the list to the newNode
    // as next.
    newNode.next = restOfTheList;

    // attach new node to the rest of the list
    // as previous.
    restOfTheList.previous = newNode;

    // attach new node to the list's
    // head.
    this.head = newNode;

    this._length += 1;
    return this;
  };



  return DoublyLinkedList;
});