const { expect } = require("chai");
const { BN } = require("@openzeppelin/test-helpers");


describe("HeapOrderbook contract", function () {
  let contract;

  before(async function () {
    // Get the ContractFactory.
    contract = await ethers.getContractFactory("HeapOrderbook");
    heapcontract = await contract.deploy();
    await heapcontract.deployed();
    console.log("Contract deployed to:", heapcontract.address);
  });

  it("insert 100, 1000, and 10000 data points", async function () {
    // Insert 100 data points
    
      await heapcontract.insert(1, 100, 10);
    

    // Insert 1000 data points
    
      await heapcontract.insert(2, 1000, 10);
    

    // Insert 10000 data points
    
      await heapcontract.insert(3, 10000, 10);

    
  });
  
  it(" find the max price", async function () {
   
    const max = await heapcontract.findMax();

    expect(max.price).to.equal(10000);

  });
  it("find the min price", async function () {
 
    const min = await heapcontract.findMin();

 
    expect(min.price).to.equal(100);

  });
 
  it("sort price", async function () {
    await heapcontract.sortPrice();
   // Sort the prices
   await heapcontract.sortPrice();
   // Get the sorted prices
   const sortedPrices = await heapcontract.getSortedPrices();
   // The max price should be from the last insertion (10000 data points)
   expect(sortedPrices[0]).to.equal(10000);
   expect(sortedPrices[1]).to.equal(1000);
   expect(sortedPrices[2]).to.equal(100);
      
  });

  it("pop max", async function () {

    const max = await heapcontract.popMax();

  });
})












  /*
  it("Should find the max price and quantity", async function () {
    const max = await heapcontract.findMax();
    //const maxQuantity = await heapcontract.findMaxQuantity();

    // The max price and quantity should be from the last insertion (10000 data points)
    expect(max).to.equal(3,1000,100);
    //expect(maxQuantity).to.equal(11100 * 3);
  });
/*
  it("Should find the min price and quantity", async function () {
    const minPrice = await heapcontract.findMinPrice();
    const minQuantity = await heapcontract.findMinQuantity();

    // The min price and quantity should be from the first insertion (100 data points)
    expect(minPrice).to.equal(2);
    expect(minQuantity).to.equal(3);
  });*/

