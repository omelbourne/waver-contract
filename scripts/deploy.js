const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("Waver");
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.001"),
    });
  
    await waveContract.deployed();
  
    console.log("Waver address: ", waveContract.address);
    };
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
};
  
runMain();