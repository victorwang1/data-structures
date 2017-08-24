var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.count = 0;

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var value = this[this.count - 1];
    delete this[this.count - 1];
    this.count--;
  }
  return value;
};

stackMethods.size = function() {
  return this.count;
};