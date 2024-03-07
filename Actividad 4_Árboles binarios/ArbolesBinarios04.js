class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function countLeaves(root) {
    if (root === null) {
      return 0;
    }
  
    if (root.left === null && root.right === null) {
      
      return 1;
    }
  
    return countLeaves(root.left) + countLeaves(root.right);
  }
  
  
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(14);
root.left.right = new Node(15);
root.right.left = new Node(20);
root.right.right = new Node(17);
root.left.left = new Node(10);

  
  const numberOfLeaves = countLeaves(root);
  console.log(`El número de hojas en el árbol es: ${numberOfLeaves}`);
  