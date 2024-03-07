class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function TreeClon(Tree) {
    if (Tree == null) {
        return null;
    }

    const node = new Node(Tree.value);

    node.left = TreeClon(Tree.left);
    node.right = TreeClon(Tree.right);

    return node;
}

const TreeA = new Node(21);
TreeA.right = new Node(13);
TreeA.left = new Node(25);

const TreeB = TreeClon(TreeA);

console.log("Árbol A:", TreeA);
console.log("Árbol B (clon):", TreeB);


