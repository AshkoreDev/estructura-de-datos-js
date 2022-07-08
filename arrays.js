// CONSTRUIR UN ARRAY

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    return this.delete(0);
  }
}

const myArray = new MyArray();


// COMPROBAR
myArray.push('Anna');
myArray.push('Julia');
myArray.push('Maria');
myArray.push('Diego');
myArray.push('Oscar');
myArray.push('Manuel');
myArray.push('Karen');
myArray.push('Paula');
myArray.push('Pedro');
