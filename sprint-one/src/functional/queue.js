var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    someInstance[count] = value;
  };

  someInstance.dequeue = function() {
    var value = someInstance[1];
    for (var i in someInstance) {
      someInstance[count - 1] = someInstance[count];
    }
    delete someInstance[count];
    count--;
    return value;
  };

  someInstance.size = function() {
    if (count < 0) {
      count = 0; 
    }
    return count;
  };

  return someInstance;
};
