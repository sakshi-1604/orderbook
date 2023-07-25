/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
//require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.19",


gasReporter: {

      enabled: true,
  
      currency: 'USD',
  
      coinmarketcap: '91114b84-bec7-4d68-8cbf-c52a834105f9',
  
      gasPrice: 1000000000, // 1 gwei
  
      showTimeSpent: true,
  
      showMethodSig: true,
  
      excludeContracts: [], // add contract names to exclude from gas reporting
  
    },
};

