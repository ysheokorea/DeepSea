const Migrations = artifacts.require("Migrations");
const deepNFT = artifacts.require("deepNFT.sol"); // deepNFT.sol 추가

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(deepNFT); // deepNFT 배포 추가
};
