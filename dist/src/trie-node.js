"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrieNode = void 0;
const utility_1 = require("./utility");
class TrieNode {
    children;
    isEndOfTheWord;
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEndOfTheWord = false;
    }
    insert(key) {
        let node = this;
        for (let i = 0; i < key.length; i++) {
            if (node.children[(0, utility_1.getIndexOfCharacter)(key[i])] === null) {
                node.children[(0, utility_1.getIndexOfCharacter)(key[i])] = new TrieNode();
            }
            node = node.children[(0, utility_1.getIndexOfCharacter)(key[i])];
        }
        node.isEndOfTheWord = true;
    }
    search(key) {
        let node = this;
        for (let level = 0; level < key.length; level++) {
            node = node.children[(0, utility_1.getIndexOfCharacter)(key[level])];
            if (node === null) {
                return false;
            }
        }
        return node.isEndOfTheWord;
    }
}
exports.TrieNode = TrieNode;
