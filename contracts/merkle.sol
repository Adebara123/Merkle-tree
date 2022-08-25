// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract merkle_tree {
    
    bytes32 public merkeRoot = 0xa2720bf73072150e787f41f9ca5a9aaf9726d96ee6e786f9920eae0a83b2abed;

    mapping (address => bool) public addresses;

    function markleProof (bytes32[] calldata _merkleproof) public {
        require(!addresses[msg.sender], "Address has gotten");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleproof, merkeRoot, leaf), "Invalid proof");

        addresses[msg.sender] = true;
    }
}