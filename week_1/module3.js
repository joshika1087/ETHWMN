// var acc_address = "0x8D2567d56e1C8a1C759C88d2AEFfd612ad9FaeE4";
// web3.eth.getBalance(acc_address).then(console.log);
// 6370589

var Web3 = require("web3");
var web3 = new Web3("http://127.0.0.1:8545");
var Eth = require("web3-eth");
var eth = new Eth("http://127.0.0.1:8545");
// var async = require("async");

var block = "";
var add = "";

async function main() {
  for (var i = 1; i <= 6370589; i++) {
    block = await eth.getBlock(i);
    console.log(block.number);
    if (block && block.transactions.length != 0) {
      for (var j = 0; j < block.transactions.length; ++j) {
        let tx = await eth.getTransactionFromBlock(block.number, j);
        console.log(tx);
        if (tx !== null && tx.to === null) {
          add = i;
          return add;
        }
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
