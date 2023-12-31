import { getIndexOfCharacter } from "./utility";

export class TrieNode {
  children: TrieNode[];
  isEndOfTheWord: boolean;
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfTheWord = false;
  }

  insert(key: string): void {
    let node: TrieNode = this;
    for(let i = 0; i < key.length; i++) { 
      if(node.children[getIndexOfCharacter(key[i])] === null) {
        node.children[getIndexOfCharacter(key[i])] = new TrieNode();
      }
      node = node.children[getIndexOfCharacter(key[i])];
    } 
    node.isEndOfTheWord = true;
  }

  search(key: string): boolean {
    let node: TrieNode = this;
    for(let level = 0; level < key.length; level++) {
      node = node.children[getIndexOfCharacter(key[level])];
      if(node === null) {
        return false;
      }
    }
    return node!.isEndOfTheWord;
  }
}


