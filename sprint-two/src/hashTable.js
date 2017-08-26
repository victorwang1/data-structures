

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._count++;
  this.expand();

  var element = this.bucketSearch(k);
  if (element[0] === k) element[1] = v;
  else element.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var element = this.bucketSearch(k);
  var tuple = Array.isArray(element[0]) ? false : element;
  if (tuple[0] === k) return tuple[1];
};

HashTable.prototype.remove = function(k) {
  this._count--;
  this.expand();

  var bucket = this._storage.get(getIndexBelowMaxForKey(k, this._limit));
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] && bucket[i][0] === k) 
      bucket.splice(i, 1);
  }
};

HashTable.prototype.bucketSearch = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || this._storage.set(index, []);
  for (var tuple of bucket) {
    if (tuple && tuple[0] === k) {
      return tuple;
      break;
    }
  }
  return bucket;
};

HashTable.prototype.expand = function() {
  var occupancyRate = this._count / this._limit;
  var factor = 1;
  if (occupancyRate > 0.75) factor = 2;
  if (occupancyRate <= 0.25) factor = 0.5;
  if (factor === 1) return;
  
  var newLimit = this._limit * factor;
  if (newLimit < 8) return;
  
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._count = 0;
  oldStorage.each(function(bucket) {
    if (bucket) {
      for (var tuple of bucket) {
        if (tuple) {
          this.insert(tuple[0], tuple[1]);
        }
      }
    }
  }.bind(this));
  
  this._limit = newLimit;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */