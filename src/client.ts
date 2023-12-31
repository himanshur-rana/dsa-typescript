import { TrieNode } from "./trie-node";

const root = new TrieNode();


root.insert('hello');
root.insert('hell');

console.log(root.search('hell'));
console.log(root.search('hello'));
console.log(root.search('a'));