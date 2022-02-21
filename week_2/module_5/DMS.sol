// SPDX-License-Identifier: GPL-3.0
// Deployed at: 0x9ede477b823687c2a4c69ef23b9bd8cba9ba2e33

pragma solidity ^0.8.0;

contract DMS {
  
  uint8 public DMSThreshold = 10;
  address payable preSetAddress;
  address public owner;
  uint256 public lastBlock = 0;

  constructor(address payable _preSetAddress) {
    owner = msg.sender;
    preSetAddress = _preSetAddress;
  }

  /**
   * @dev lastBlock is updated every time still_alive() is called by the owner
   */
  function still_alive() external {
    require(msg.sender == owner, "Only owner allowed!");
    lastBlock = block.number;
  }

  /**
   * @dev DMS will be trigerred when threshold is crossed and contract will be destroyed
   * @return bool indicating if DMS is triggered or not
   */
  function DMSTrigger() public returns (bool) {

    if (block.number >= DMSThreshold && block.number - DMSThreshold > lastBlock) 
    {
      selfdestruct(preSetAddress);
      return true;
    }
    return false;
  }
}