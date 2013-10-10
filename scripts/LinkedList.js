define(['Node'], function(Node) {
  var LinkedList = function() {
    this.head = null;
  }

  LinkedList.prototype.append = function(data) {
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

  return LinkedList;
});