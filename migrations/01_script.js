const { Module } = require("module");

const Voting = artifacts.require("Voting.sol");

module.exports=(deployer) => {
    deployer.deploy(Voting);
}