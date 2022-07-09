// 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null
          }
        }
      }
    }
  }
}

// CONSTRUIR UN SINGLY LINKED LIST.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPonter = this.getTheIndex(index - 1);
    const holdingPointer = firstPonter.next;

    firstPonter.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  remove(index){
    if(!this.getTheIndex(index)) {
      console.log("Este nodo no existe.");
    }

    if(index === 0){
      this.head = this.head.next;
      this.length--;
      return this;
    }

    let previousPoiner =  this.getTheIndex(index - 1);
    let nextPointer =  this.getTheIndex(index + 1 );
    previousPoiner.next = nextPointer;
    this.length--;
    return this;
  }
}

let mySinglyLinkedList = new singlyLinkedList(1);