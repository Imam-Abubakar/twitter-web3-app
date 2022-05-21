const hre = require("hardhat")

async function main() {

  const profileImageMinterFactory = await hre.ethers.getContractFactory("ProfileImageNfts")
  const profileImageContract = await profileImageMinterFactory.deploy()

  await profileImageContract.deployed()

  console.log("Profile Image Minter Contract deployed to:", profileImageContract.address)
}


;(async () => {
  try {
    await main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()

/*
Profile Image Minter Contract deployed to: 0x1f9F5a065b91fa4FcFB0C56292274488fa4e69a1
*/