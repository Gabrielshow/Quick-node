//https://yolo-powerful-scion.quiknode.pro/4202501c4b6c2599eb96b60473d016d46168a5c8

const ethers = require('ethers');
const node = "https://yolo-powerful-scion.quiknode.pro/4202501c4b6c2599eb96b60473d016d46168a5c8";

const provider = new ethers.JsonRpcProvider(node);

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log('Mnemonic:', wallet.mnemonic.phrase);
    console.log('Address:', wallet.address);
    console.log('Private Key:', wallet.privateKey);
    const blockNumber = await provider.getBlockNumber();
    console.log("Block Number:", blockNumber);
}

main();