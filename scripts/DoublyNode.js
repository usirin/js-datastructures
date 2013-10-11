define(function() {
  var DoublyNode = function(opt_data) {
    this.next = null;
    this.previous = null;
    this.data = opt_data || null;
  }
  return DoublyNode;
});