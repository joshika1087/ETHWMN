let text = "Having a great time!"

let bytes32 = ethers.utils.formatBytes32String(text)

let originalText = ethers.utils.parseBytes32String(bytes32)

console.log(bytes32);
console.log(originalText);
