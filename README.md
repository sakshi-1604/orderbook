# HeapOrderbook Smart Contract

HeapOrderbook is a Solidity smart contract that maintains a max-heap unique order book based on order prices. It allows for the insertion of new orders, retrieval of the maximum and minimum prices, sorting of the prices, and popping the maximum price order.

## Installation and Usage

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/heap-orderbook.git
   cd heap-orderbook

2. Install the required dependencies using npm:
   ```bash
     npm install

4. Compile the Solidity contract using Hardhat (you can change the network in hardhat.config.js if needed):
   ```bash
     npx hardhat compile

6. Run the test suite to ensure the contract behaves as expected:
   ```bash
     npx hardhat test
   
Deploy the contract to your desired Ethereum network (if needed). You can update the deployment settings in the deploy.js file.

Once the contract is deployed, you can interact with it using an Ethereum wallet or through a web3 provider.

# Contract Functions
The HeapOrderbook contract includes the following functions:

insert(uint256 orderId, uint256 price, uint256 quantity): Inserts a new order into the order book and maintains the max-heap property.
findMax(): Returns the order with the maximum price in the order book.
findMin(): Returns the order with the minimum price in the order book.
sortPrice(): Sorts the order prices in descending order.
popMax(): Removes the order with the maximum price from the order book.
getSortedPrices(): Returns an array of order prices sorted in descending order.

# Versions
hardhat: ^2.17.0
ethers: ^6.6.4
chai: ^4.3.7
hardhat-gas-reporter: ^1.0.9
@nomicfoundation/hardhat-chai-matchers: ^2.0.1
@nomicfoundation/hardhat-ethers: ^3.0.4
@nomicfoundation/hardhat-toolbox: ^3.0.0
@openzeppelin/test-helpers: ^0.5.16
