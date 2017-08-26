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
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.getDirection = function(value) {
  return value > this.value ? 'right' : 'left';
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

// var getRandom = function() {
//   return Math.floor(Math.random() * 100);
// };
// var newTree = new BinarySearchTree(getRandom());
// var treeContent = [];
// function test() {
//   for (var i = 0; i < 1000; i++) {
//     var newNode = getRandom();
//     treeContent.push(newNode);
//     newTree.insert(newNode);
//   }
// }

// test();
// console.log(newTree.depthFirstLog());
