require.config({
    
});

require([
    'Node',
    'LinkedList'
], function (Node, LinkedList) {
    window.LinkedList = LinkedList;
});