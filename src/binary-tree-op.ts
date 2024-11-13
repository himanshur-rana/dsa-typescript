import { BinaryTree } from './binary-tree';

export class BinaryTreeOp {
  preOrder(node: BinaryTree | null) {
    if (!node) {
      return;
    }
    console.log(`${node.data} `);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node: BinaryTree | null) {
    if (!node) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(`${node.data} `);
  }

  inOrder(node: BinaryTree | null) {
    if (!node) {
      return;
    }
    this.inOrder(node.left);
    console.log(`${node.data} `);
    this.inOrder(node.right);
  }

  levelOrder(node: BinaryTree) {
    const queueBt: BinaryTree[] = [];
    queueBt.push(node);

    while (queueBt.length) {
      const ele: BinaryTree = queueBt.shift() as BinaryTree;
      console.log(ele?.data);
      if (ele?.left) {
        queueBt.push(ele?.left);
      }
      if (ele?.right) {
        queueBt.push(ele?.right);
      }
    }
  }
}

// main
const bt: BinaryTree = new BinaryTree(1);
bt.left = new BinaryTree(2);
bt.right = new BinaryTree(3);
bt.left.left = new BinaryTree(4);
bt.right.right = new BinaryTree(6);
bt.left.left.left = new BinaryTree(5);

const btOp = new BinaryTreeOp();
// console.log('#########');
// console.log('pre order');
// btOp.preOrder(bt);
// console.log('#########');
// console.log('post order');
// btOp.postOrder(bt);
// console.log('#########');
// console.log('in order');
// btOp.inOrder(bt);
console.log('#########');
btOp.levelOrder(bt);
