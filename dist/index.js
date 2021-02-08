"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timeStamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}
function randomHashMaker() {
    const alphabetChar = 'abcdefghijklmnopqstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetCharLen = alphabetChar.length;
    let hash = "";
    for (let i = 0; i < 20; i++) {
        hash += alphabetChar.charAt(Math.floor(Math.random() * alphabetCharLen));
    }
    return hash;
}
const genesisBlock = new Block(0, randomHashMaker(), "", "Hello", 123456);
console.log(genesisBlock);
//# sourceMappingURL=index.js.map