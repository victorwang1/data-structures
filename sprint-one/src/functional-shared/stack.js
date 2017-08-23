var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};  
  newInstance.count = 0; 
  _.extend(newInstance, stackMethods);
  
  return newInstance;  
};

var stackMethods = {
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      var value = this[this.count - 1];
      delete this[this.count - 1];
      this.count--;
    }
    return value;
  },
  
  size: function() {
    
    return this.count;
  }
  
};