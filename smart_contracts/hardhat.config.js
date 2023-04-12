require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

// contract : 0xA368e9E226001847Ae85316F1f88ae3796068C6d

module.exports = {
  solidity: "0.8.4",  
    networks: {
      goerli: {
        url: process.env.GOERLI_API_KEY,
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
    }
};

// Successfully submitted source code for contract
// contracts/Collection.sol:Collection at 0xA368e9E226001847Ae85316F1f88ae3796068C6d
// for verification on the block explorer. Waiting for verification result...

// Successfully verified contract Collection on Etherscan.
// https://goerli.etherscan.io/address/0xA368e9E226001847Ae85316F1f88ae3796068C6d#code
// PS C:\Users\d0d0l\OneDrive\Desktop\nft-collection\smart_contracts> 