"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trie_node_1 = require("./trie-node");
const root = new trie_node_1.TrieNode();
root.insert('hello');
root.insert('hell');
console.log(root.search('hell'));
console.log(root.search('hello'));
console.log(root.search('a'));
