define(function() {
    var Node = function(opt_data) {
        this.next = null;
        this.data = opt_data || null;
    }
    return Node;
})
