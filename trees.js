//      10
//   4     20
// 2  8  17  170

// CONSTRUIR UN BINARY TREE

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this. root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if(value < currentNode.value) {

          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {

          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    if (this.root.value === value) {
      return this.root;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left.value === value) {
          return currentNode.left;
        }
        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        if (currentNode.right.value === value) {
          return currentNode.right;
        }
        currentNode = currentNode.right;
      }
    }
  }

  getSons(currentNode) {
    const sons = [];

    if (currentNode.left) {
      sons.push(currentNode.left.value);
      sons.push(...this.getSons(currentNode.left));
    }

    if (currentNode.right) {
      sons.push(currentNode.right.value);
      sons.push(...this.getSons(currentNode.right));
    }
    return sons;
  }

  delete(value) {
    if (this.root.value === value) {
      return this.root;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left.value === value) {
          const DeleteNode = currentNode.left;
          currentNode.left = null;
          const sons = this.getSons(DeleteNode);
          if (sons.length > 0) {
            sons.forEach((element) => {
              this.insert(element);
            });
          }
          return DeleteNode;
        }
        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        if (currentNode.right.value === value) {
          const DeleteNode = currentNode.right;
          currentNode.right = null;
          const sons = this.getSons(DeleteNode);
          if (sons.length > 0) {
            sons.forEach((element) => {
              this.insert(element);
            });
          }
          return DeleteNode;
        }
        currentNode = currentNode.right;
      }
    }
  }

}

const myTree = new BinarySearchTree();