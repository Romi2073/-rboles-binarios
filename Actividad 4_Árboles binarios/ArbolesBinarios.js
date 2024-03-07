class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function twinTrees(treeA, treeB) {
    if (treeA === null && treeB === null) {
        return true;
    } if (treeA === null || treeB === null) {
        return false;
    } if (treeA.value !== treeB.value) {
        return false;
    }

    const left = twinTrees(treeA.left, treeB.left);
    const right = twinTrees(treeA.right, treeB.right);

    return left & right;
}


const treeA = new Node(15);
treeA.left = new Node(35);
treeA.right = new Node(12);
treeA.left = new Node(40);
treeA.rigth = new Node(20);

const treeB = new Node(15);
treeB.left = new Node(35);
treeB.right = new Node(12);
treeB.left = new Node(40);
treeB.rigth = new Node(20);

const resultado = twinTrees(treeA, treeB);
console.log("¿Los árboles son idénticos?:", resultado ? "true" : "false");