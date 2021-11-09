class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          currentNode = null;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val){
        if (!currentNode.right) {
          currentNode.right = newNode;
          currentNode = null;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    if (val < node.val) {
      if (!node.left) {
        node.left = newNode;
        return this;
      }
      else this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      if (!node.right) {
        node.right = newNode;
        return this;
      }
      else this.insertRecursively(val, node.right);
    }

  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) return currentNode;
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return undefined;

    if (val === node.val) {
      return node;
    }
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    }
    if (val > node.val) {
      return this.findRecursively(val, node.right);
    }
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) return [];

    let visited = [];

    function preOrderHelper(node) {
      visited.push(node.val);
      if (node.left) preOrderHelper(node.left);
      if (node.right) preOrderHelper(node.right);
    }
    preOrderHelper(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) return [];

    let visited = [];

    function inOrderHelper(node) {
      if (node.left) inOrderHelper(node.left);
      visited.push(node.val);
      if (node.right) inOrderHelper(node.right);
    }
    inOrderHelper(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (this.root === null) return [];

    let visited = [];

    function postOrderHelper(node) {
      if (node.left) postOrderHelper(node.left);
      if (node.right) postOrderHelper(node.right);
      visited.push(node.val);
    }
    postOrderHelper(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root === null) return [];

    const visited = [];
    const stackToVisit = [this.root];

    while (stackToVisit.length) {
      let currentNode = stackToVisit.shift();
      visited.push(currentNode.val);
      if (currentNode.left) stackToVisit.push(currentNode.left);
      if (currentNode.right) stackToVisit.push(currentNode.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, node = this.root) {
    if (this.root === val) {
      let nodeToReturn = this.root;
      this.root = null;
      return nodeToReturn;
    }

    if (node.left && node.left.val === val) {
      let nodeToReturn = node.left;
      if (!node.left.left && !node.left.right) {
        node.left = null;
      } else if (!node.left.left || !node.left.right) {
        node.left = node.left.left || node.left.right;
      } else {
        node.left.right.left = node.left.left;
        node.left = node.left.right;
      }
      return nodeToReturn;
    }
    if (node.right && node.right.val === val) {
      let nodeToReturn = node.right;
      if (!node.right.left && !node.right.right) {
        node.right = null;
      } else if (!node.right.left || !node.right.right) {
        node.right = node.right.left || node.right.right;
      } else {
        node.right.right.left = node.right.left;
        node.right = node.right.right;
      }
      return nodeToReturn;
    }
    if (val < node.val) return this.remove(val, node.left);
    if (val > node.val) return this.remove(val, node.right);

  }



  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(node = this.root) {
    if (this.root === null) return true;
    if (!node.left || !node.right) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
