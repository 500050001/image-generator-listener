// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageRequest {
    uint256 public currentPrice = 1 ether; // Starting price at 1 ether (adjust this to match 1 euro in wei)

    event ImageRequested(address indexed requester, string description, uint256 amount, uint256 requestId);

    uint256 public requestIdCounter = 0;

    function requestImage(string memory description) public payable {
        require(msg.value >= currentPrice, "Insufficient payment");

        emit ImageRequested(msg.sender, description, msg.value, requestIdCounter);

        // Increase the price for the next request
        currentPrice += 1 ether; // Increase by 1 ether (adjust as necessary)

        requestIdCounter++;
    }
}
