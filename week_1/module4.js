var block = "";
var leaves = [];

function main() {

	var fs = require('fs');
	var text = fs. readFileSync("./module3_block_hashes.txt").toString('utf-8');
	var leaves = text.split('\n');
	leaves.pop();
	  
	 // console.log(leaves);
 	const { MerkleTree } = require('merkletreejs')
	const SHA256 = require('crypto-js/sha256')

	const tree = new MerkleTree(leaves)
	const root = tree.getRoot().toString('hex')
	console.log(root)
	console.log(tree.leaves.length)
}

main()
