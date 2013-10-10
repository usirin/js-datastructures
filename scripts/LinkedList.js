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
    var tmp = this.head;
    while(tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = new Node(data);
    return this;
  };

  LinkedList.prototype.trim = function() {
    var tmp = this.head;
    while(tmp.next.next) {
      tmp = tmp.next;
    }
  };

  return LinkedList;
});