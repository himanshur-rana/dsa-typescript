export const getIndexOfCharacter = (character: string) : number => {
  return character.charCodeAt(0) - 'a'.charCodeAt(0);
};