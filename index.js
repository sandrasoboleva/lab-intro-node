class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length - 1){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(null, this.items);
  }

  sum() {
   return this.items.reduce((a, b) => {
     return a + b;
   }, 0);
  }

  avg() {
 if (!this.items.length) {
   throw new Error("EmptySortedList");
 }
 return this.sum() / this.items.length
  }
}
module.exports = SortedList;
