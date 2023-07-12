// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL =
  process.env.QUICKNODE_HTTP_URL ||
  "https://restless-young-aura.ethereum-goerli.discover.quiknode.pro/b5035309906d5fe6f40c778e8cbefd89d3e380f0/";
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "b13f653a540bf5619e507202bdb984e5f875378e79221286da1d8c7394a52d82";

console.log(QUICKNODE_HTTP_URL);

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
