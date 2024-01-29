var ImmutableToken = artifacts.require("./ImmutableToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ImmutableToken, "Immutable", "DARA", 18, ("42000000000000000000000000")).then(function() {
    console.log("Deployed token <3")
  });
};