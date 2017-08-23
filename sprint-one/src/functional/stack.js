var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    someInstance[count] = value;
  };

  someInstance.pop = function() {
    var value = someInstance[count];
    delete someInstance[count];
    count--
    return value;
    
  };

  someInstance.size = function() {
    if(count < 0) {
      count = 0;
    }
    return count;
  };

  return someInstance;
};
