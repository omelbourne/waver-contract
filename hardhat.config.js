require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const STAGING_ALCHEMY_KEY = process.env.TAGING_ALCHEMY_KEY;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};