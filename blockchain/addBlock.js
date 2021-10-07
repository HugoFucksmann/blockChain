const CryptoBlockchain = require("./blockChain");
const CryptoBlock = require("./cryptoBlock");

const addBlock = (newBlock) => {
  try {
    let smashingCoin = new CryptoBlockchain();

    smashingCoin.addNewBlock(new CryptoBlock(newBlock));

    return smashingCoin;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  addBlock,
};
