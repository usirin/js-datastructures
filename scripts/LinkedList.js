define(['Node'], function(Node) {
  var LinkedList = function() {
    this.head = null;
  }

  LinkedList.prototype.append = function(data) {
    var tmp = this.head;
    while(tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = new Node;
    tmp.next.data = data;
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