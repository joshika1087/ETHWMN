// SPDX-License-Identifier: GPL-3.0
        
pragma solidity >=0.4.22 <0.9.0;

// This import is automatically injected by Remix
import "remix_tests.sol"; 

import "remix_accounts.sol";
import "/1_Storage.sol";

contract StorageTest {

    Storage storageToTest;

    function beforeAll() public {
        storageToTest = new Storage();
    }

    function storeValueIsSet10() public returns (bool) {
        storageToTest.store(10);
        return Assert.equal(storageToTest.retrieve(), 10, "value is not 10");
    }

    function storeValueIsNotSet10() public returns (bool) {
        storageToTest.store(30);
        return Assert.notEqual(storageToTest.retrieve(), 10, "value should not be 10");
    }
}
    
