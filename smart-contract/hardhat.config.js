require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9abTeGedNaiR4PNQfK66SUuZQ5SPZ9dA',
      accounts: ['f71453a73ca4e4a5784281c9f17e0f3946303a306066e59e6abef7656c95d587',],
    }
  }
};
