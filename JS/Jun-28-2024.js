//-----------------------------------------------------------------------------------------------------------------------------------//
// U P D A T E D    N O D E   C L A S S
//-----------------------------------------------------------------------------------------------------------------------------------//

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//       this.previous = null;              // Added previous property
//     }
  
//     setNextNode(node) {
//       if (node instanceof Node || node === null) {
//         this.next = node;
//       } else {
//         throw new Error('Next node must be a member of the Node class')
//       }
//     }
  
//     setPreviousNode(node) {              // Added set previous property
//       if (node instanceof Node || node === null) {
//         this.previous = node;
//       } else {
//         throw new Error('Previous node must be a member of the Node class')
//       }
//     }
  
//     getNextNode() {
//       return this.next;
//     }

const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Create your .addToHead() method below:
  addToHead(data){
    const newHead = new Node(data)
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead)
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data)
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail)
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail
    if(!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if(!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode()
    if (this.head) {
      this.head.setPreviousNode(null)
    }
    if (removedHead === this.tail) {
      this.removeTail()
    }
    return removedHead.data
  }
  
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null)
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    // Continue your .removeByData() method below:
   if (nodeToRemove === this.head) {
      this.removeHead();
   }
   else if (nodeToRemove === this.tail) {
      this.removeTail();
   }
   else {
    const nextNode = nodeToRemove.getNextNode();
    const previousNode = nodeToRemove.getPreviousNode();

    nextNode.setPreviousNode(previousNode);
    previousNode.setNextNode(nextNode);
   }
   return nodeToRemove;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList();

module.exports = DoublyLinkedList;