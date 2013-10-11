define(['DoublyNode'], function(Node) {
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  DoublyLinkedList.prototype.append = function(data) {
    if(!data) {
      console.log('Needs an input.');
      return false;
    }

    if(this._length === 0) {
      var newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this._length += 1;
      return this;
    }

    var lastNode = this.tail;

    // create a new node.
    var newNode = new Node(data);

    // attach new node to the last node
    // as next.
    lastNode.next = newNode;

    // attach the old list to new node
    // as previous.
    newNode.previous = lastNode;

    // attach new node as tail.
    this.tail = newNode;

    this._length += 1;

    return this;
  };

  /**
   * Prepends an item to the start of the list.
   * @param  {mixed} data
   * @return {DoublyLinkedList}
   */
  DoublyLinkedList.prototype.prepend = function(data) {
    if(!data) {
      console.log('Needs an input.');
      return false;
    }

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


  DoublyLinkedList.prototype.at = function(index) {
    if(index > this.length() || index < 0) {
      console.log('Out of bounds');
      return false;
    }

    var current = null;

    // means it is close to the start,
    // so we will iterate from the head.
    if(index <= this.length() / 2) {
      current = this.head;
      for(var i = 0; i < index; i++) {
        current = current.next;
      }
    }
    else {
      current = this.tail;
      for(var i = this._length; i > index; i--) {
        current = current.previous;
      }
    }

    return current;
  };

  /**
   * Returns the length of the list
   * @return {int}
   */
  DoublyLinkedList.prototype.length = function() {
    return this._length;
  };

  /**
   * Array form of the DoublyLinkedList.
   * @return {Array}
   */
  DoublyLinkedList.prototype.toArray = function() {
    var array = [],
        current = this.head;

    while(current) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  };

  /**
   * String representation of the DoublyLinkedList.
   * @return {String} [description]
   */
  DoublyLinkedList.prototype.toString = function() {
    return this.toArray().toString();
  };

  return DoublyLinkedList;
});