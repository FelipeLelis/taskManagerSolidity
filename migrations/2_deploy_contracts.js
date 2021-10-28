var taskManager = artifacts.require("TaskManager");
module.exports = function(deployer) {
    deployer.deploy(taskManager)
}