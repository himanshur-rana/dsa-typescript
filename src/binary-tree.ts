export class BinaryTree {
  data: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
