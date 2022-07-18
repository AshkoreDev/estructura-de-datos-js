
//    2 - 0
//  /  \
//  1 - 3



//  1. REPRESENTAR UN GRAFO POR EDGE LIST

//  por conexiones
const graph = [
  [0,2], [2,3], [2,2], [1,3]
];


//  2. REPRESENTAR UN GRAFO POR ADJACENT LIST

const graphOne = [
//  0     1       2       3 por índices
   [2], [2,3], [0,1,3], [1,2]
];

//  usando un hash table
const graphTwo = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2]
};


//  3. REPRESENTAR UN GRAFO POR ADJACENT MATRIX

const graphThree = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
];

//  usando un hash table
const graphFor = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
};


// CONSTRUIR UN GRAFO CON ADJACENT LIST

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();
myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('8');

myGraph.addEdge('3', '5');
myGraph.addEdge('6', '3');
myGraph.addEdge('1', '6');
myGraph.addEdge('1', '3');
myGraph.addEdge('1', '4');
myGraph.addEdge('4', '5');
myGraph.addEdge('8', '4');