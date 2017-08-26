

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  
  this.count++;
  if (this.count > 0.75 * this._limit) {
    this.storage.resize(true);
  }
  
  //*************DON'T TOUCH IT!!!**************
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  var found = null;
  for (var el of bucket) {
    if (el[0] === k) {
      el[1] = v;
      found = true;
      break;
    }
  }
  if (!found) { 
    bucket.push([k, v]);
  }
  //*************DON'T TOUCH IT!!!**************
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var el of bucket) {
    if (el[0] === k) {
      return el[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  this.count--;
  if (this.count > 8 && this.count < 0.25 * this._limit) {
    this.storage.resize(false);
  }
  
  //*************DON'T TOUCH IT!!!**************
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  //*************DON'T TOUCH IT!!!**************
};

HashTable.prototype.resize = function(expand) {
  var factor = expand ? 2 : 0.5;
  this._limit = factor * this._limit;

  var newTable = new LimitedArray(this._limit);
  
  this._storage.each(function(bucket, index, array) {
    for (var element in bucket) {
      newTable.insert(element[0], element[1]);
    }
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
