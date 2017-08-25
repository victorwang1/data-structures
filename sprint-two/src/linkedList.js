var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // var newNode = Node(value);
    // list[value] = newNode;
    // if (list.head === null) list.head = newNode;
    // if (list.tail !== null) list.tail.next = newNode;
    // list.tail = newNode;
    debugger;
    var newNode = Node(value);
    if (list.head === null ) {
      list.head = newNode;
    } else {
      list.tail.next = newNode; 
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var formerHead;
    if (formerHead = list.head) {
      list.head = formerHead.next; 
    }
    return formerHead.value;
  };

  list.contains = function(target) {
    var curr = list.head;
    while (curr !== null) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
