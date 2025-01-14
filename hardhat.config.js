require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 2330
    },
    /*
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      //url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    }, 
    altcoinchain: {
      // Infura
    //  url: `https://altcoinchain.infura.io/v3/${infuraId}`,
      url: "https://rpc0.altcoinchain.org/rpc",
      accounts: [privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

