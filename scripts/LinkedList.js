define(['Node'], function(Node) {
  var LinkedList = function() {
    this.head = null;
  }

  /**
   * Appends an item to the end of the list.
   * @param  {mixed} data
   * @return {LinkedList}
   */
  LinkedList.prototype.append = function(data) {
    if(!data) {
      console.log('Needs an input.');
      return false;
    }

    // checking if the list is empty,
    // if so, creating a new Node with
    // the given data, and returning the
    // list.
    if(!this.head) {
      this.head = new Node(data);
      return this;
    }

    // this means the list is not empty,
    // so that we are looping throug to the
    // last element.
    var current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(data);
    return this;
  };

  /**
   * Prepends an item to the start of the list.
   * @param  {mixed} data
   * @return {LinkedList}
   */
  LinkedList.prototype.prepend = function(data) {
    if(!data) {
      console.log('Needs an input.');
      return false;
    }
    
    // store the current list in a local
    // variable so that we can reference it later.
    var restOfTheList = this.head;

    // create the new element and put it to
    // the head of the list.
    this.head = new Node(data);

    // merge it with the rest of the list.
    this.head.next = restOfTheList;

    return this;
  };

  /**
   * Trims down an item from the list
   * and returns it.
   * @return {Node} [description]
   */
  LinkedList.prototype.trim = function() {
    // special case for empty list.
    if(!this.head) {
      console.log('You can\'t trim out from an empty list');
      return false;
    }
    var current = this.head,
        previous = this.head;

    // special case for a list with only one node.
    // means there is only one node in
    // the list.
    if(!current.next) {
      this.head = null;
      return previous;
    }

    // this is the rest of th
    while(current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current;
  };

  /**
   * shifts the first value of the LinkedList off and returns it, 
   * shortening the array by one element and moving everything down.
   * @return {Node}
   */
  LinkedList.prototype.shift = function() {
    // special case for empty list
    if(!this.head) {
      console.log('You can\'t shift out from an empty list');
      return false;
    }

    var current = this.head;
    var restOfTheList = current.next;
    this.head = restOfTheList;
    return current;
  }

  /**
   * Returns the length of the list
   * @return {int}
   */
  LinkedList.prototype.length = function() {
    var current = this.head,
        length = 0;

    while(current) {
      length++;
      current = current.next;
    }

    return length;
  };

  /**
   * Array form of the LinkedList.
   * @return {Array}
   */
  LinkedList.prototype.toArray = function() {
    var array = [],
        current = this.head;

    while(current) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  /**
   * String representation of the LinkedList.
   * @return {String} [description]
   */
  LinkedList.prototype.toString = function() {
    return this.toArray().toString();
  }

  return LinkedList;
});