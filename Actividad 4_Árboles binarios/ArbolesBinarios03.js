class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodesAtLevel(root, targetLevel) {
  if (root === null || targetLevel < 1) {
    return [];
  }

  if (targetLevel === 1) {
    return [root.value];
  }

  const leftNodes = nodesAtLevel(root.left, targetLevel - 1);
  const rightNodes = nodesAtLevel(root.right, targetLevel - 1);

  return leftNodes.concat(rightNodes);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(14);
root.left.right = new Node(15);
root.right.left = new Node(20);
root.right.right = new Node(17);
root.left.left = new Node(10);
root.left.right = new Node(25);

const targetLevel = 3;
const nodesAtLevel2 = nodesAtLevel(root, targetLevel);
console.log(`Nodos en el nivel ${targetLevel}:`, nodesAtLevel2);

