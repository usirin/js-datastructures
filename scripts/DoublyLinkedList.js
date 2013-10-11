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

  /**
   * shifts the first value of the LinkedList off and returns it, 
   * shortening the array by one element and moving everything down.
   * @return {Node || boolean} false for empty list.
   */
  DoublyLinkedList.prototype.shift = function() {
    // special case for empty list
    if(!this.head) {
      console.log('You can\'t shift out from an empty list');
      return false;
    }

    var current = this.head;
    var restOfTheList = current.next;
    this.head = restOfTheList;

    this._length -= 1;

    if(this._length != 0) {
      this.head.previous = null;
    }
    // this is the case for 1 element
    // list.
    else {
      this.head = null;
      this.tail = null;
    }

    return current;
  };

  /**
   * Trims down an item from the list
   * and returns it.
   * @return {Node || boolean} false for empty list.
   */
  DoublyLinkedList.prototype.trim = function() {
    // special case for empty list
    if(!this.head) {
      console.log('You can\'t trim out from an empty list');
      return false;
    }

    var current = this.tail;
    var restOfTheList = current.previous;
    this.tail = restOfTheList;

    this._length -= 1;

    if(this._length != 0) {
      this.tail.next = null;
    }
    // this is the case for 1 element
    // list.
    else {
      this.head = null;
      this.tail = null;
    }

    return current;
  };

  /**
   * Returns the node at the given index.
   * @param  {int} index
   * @return {Node || boolean} false for out of bounds.
   */
  DoublyLinkedList.prototype.at = function(index) {
    if(index >= this.length() || index < 0) {
      console.log('Out of bounds');
      return false;
    }

    var current = null;

    // means it is close to the start,
    // so we will iterate from the head.
    if(index < this._length / 2) {
      current = this.head;
      for(var i = 0; i < index; i++) {
        current = current.next;
      }
    }
    // means it is close to the end,
    // so we will iterate from the tail.
    else {
      current = this.tail;
      for(var i = this._length; i > index + 1; i--) {
        current = current.previous;
      }
    }

    return current;
  };

  /**
   * Returns the node at the given index.
   * @param  {int} index
   * @return {Node || boolean} false for out of bounds.
   */
  DoublyLinkedList.prototype.insertAt = function(index, data) {
    if(index > this.length() || index < 0) {
      console.log('Out of bounds');
      return false;
    }

    if(index === 0) {
      return this.prepend(data);
    }

    if(index === this.length()) {
      return this.append(data);
    }

    // get the right bound of the list
    // for given index.
    var rightBound = this.at(index);

    // get the left bound of the list
    // for given index.
    var leftBound = rightBound.previous;

    // create new node with data.
    var newNode = new Node(data);

    // insert it between bounds.
    newNode.next = rightBound;
    newNode.previous = leftBound;

    // attach necessary pointers from
    // bounds to the new node.
    leftBound.next = newNode;
    rightBound.previous = newNode;

    this._length += 1;

    return this;
  };

  /**
   * Deletes the node at the given index
   * @param  {int} index
   * @return {LinkedList || boolean} false for out of bounds.
   */
  DoublyLinkedList.prototype.deleteAt = function(index) {
    if(index > this.length() || index < 0) {
      console.log('Out of bounds');
      return false;
    }

    // if index === 0 it means the
    // shift operation.
    if(index === 0) {
      this.shift();
      return this;
    }

    // if the last element of the list
    // it means the trim operation.
    if(index === this.length() - 1) {
      this.trim();
      return this;
    }

    var nodeToBeDeleted = this.at(index);

    var leftBound = nodeToBeDeleted.previous;

    var rightBound = nodeToBeDeleted.next;

    leftBound.next = rightBound;
    rightBound.previous = leftBound;

    this._length -= 1;

    return this;
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
   * @return {String}
   */
  DoublyLinkedList.prototype.toString = function() {
    return this.toArray().toString();
  };

  return DoublyLinkedList;
});