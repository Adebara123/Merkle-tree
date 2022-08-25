import { ethers } from "hardhat";
import { MerkleTree} from "merkletreejs";
import  keccak256  from "keccak256";

async function main() {
  
    let [add1, add2, add3, add4, add5, add6, add7, add8, add9, add10] = await ethers.getSigners();

    
    const addresses = await  [add1.address, add2.address, add3.address, add4.address, add5.address, add6.address, add7.address, add8.address, add9.address, add10.address];
    const leafnode = await addresses.map(addr => keccak256(addr));
    const markleTree = new MerkleTree(leafnode, keccak256, {sortPairs: true});
    console.log(markleTree);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
