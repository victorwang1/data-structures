var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var direction = this.getDirection(value);
  if (this[direction] === null) {
    this[direction] = new BinarySearchTree(value);
  } else {
    this[direction].insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var direction = this.getDirection(value);
  if (value === this.value) {
    return true;
  }
  if (this[direction] === null) {
    return false;
  }
  return this[direction].contains(value);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var output = [];
  output.push(callback(this.value));
  if (this.left !== null) {
    output = output.concat(this.left.depthFirstLog(callback));
  }
  if (this.right !== null) {
    output = output.concat(this.right.depthFirstLog(callback));
  }
  return output;
};

BinarySearchTree.prototype.getDirection = function(value) {
  return value > this.value ? 'right' : 'left';
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
