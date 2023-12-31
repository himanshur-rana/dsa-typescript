"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfCharacter = void 0;
const getIndexOfCharacter = (character) => {
    return character.charCodeAt(0) - 'a'.charCodeAt(0);
};
exports.getIndexOfCharacter = getIndexOfCharacter;
