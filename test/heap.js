const { expect } = require("chai");
const { BN } = require("@openzeppelin/test-helpers");


describe("HeapOrderbook contract", function () {
  let contract;
  this.timeout(300000);

  before(async function () {
    // Get the ContractFactory.
    contract = await ethers.getContractFactory("HeapOrderbook");
    heapcontract = await contract.deploy();
    await heapcontract.deployed();
    console.log("Contract deployed to:", heapcontract.address);
  });

  it("A. insert data points", async function () {
    // Insert 100 data points
    
      await heapcontract.insert(1, 100, 10);
    

    // Insert 1000 data points
    
      await heapcontract.insert(2, 1, 10);
    

    // Insert 10000 data points
    
      await heapcontract.insert(3, 1000000, 10);
      await heapcontract.insert(4, 100000, 10);
      await heapcontract.insert(5, 20, 10);
      await heapcontract.insert(6, 3000, 10);
      await heapcontract.insert(7, 40000, 10);
      await heapcontract.insert(8, 6000, 10);
      await heapcontract.insert(9, 120, 10);
      await heapcontract.insert(10, 10, 10);

    
  });
  

  it("1. should print the heap", async function () {
    // Get the heap array
    const heapArray = await heapcontract.getHeap();

    // Print the heap array
    console.log("Heap Array:");
    for (let i = 0; i < heapArray.length; i++) {
      console.log(
        `Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`
      );
    }
  });
  
 
  it("2. sort price", async function () {
    await heapcontract.sortPrice();
   
   // Get the sorted prices
   const sortedPrices = await heapcontract.getSortedPrices();
   // Display the sorted prices
   console.log("Sorted Prices:");
       for (let i = 0; i < sortedPrices.length; i++) {
         console.log(sortedPrices[i].toString());
       }
       console.log("Sorted Prices end");
      
  });

  it("2.1 heap after sort", async function () {
    // Get the heap array
    const heapArray = await heapcontract.getHeap();

    // Print the heap array
    console.log("Heap after sort");
    for (let i = 0; i < heapArray.length; i++) {
      console.log(
        `Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`
      );
    }
  });


 
  it("3. find the max price", async function () {
    // Find the max price
    const maxOrder = await heapcontract.findMax();

    // Log the max price details
    console.log("Max Price Order ID:", maxOrder.id.toString());
    console.log("Max Price:", maxOrder.price.toString());
    console.log("Max Quantity:", maxOrder.quantity.toString());

  });

  it("4. find the min price", async function () {
 
    const minOrder = await heapcontract.findMin();

        // Log the max price details
        console.log("Order ID:", minOrder.id.toString());
        console.log("Min Price:", minOrder.price.toString());
        console.log("Quantity:", minOrder.quantity.toString());
    

  });

  it("5. pop max", async function () {

    const max = await heapcontract.popMax();

  });

  it("5.1 heap after pop max", async function () {
    // Get the heap array
    const heapArray = await heapcontract.getHeap();

    // Print the heap array
    console.log("Heap after pop max");
    for (let i = 0; i < heapArray.length; i++) {
      console.log(
        `Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`
      );
    }
  });


it("B. insert 100 random data points and print the heap", async function () {
    
  for (let i = 0; i < 100; i++) {
      const orderId = Date.now() + i; // Using timestamp + loop index as the Order ID to ensure uniqueness
      const price = Math.floor(Math.random() * 1000000) + 1; // Random price between 1 and 1,000,000
      const quantity = Math.floor(Math.random() * 100) + 1; // Random quantity between 1 and 100
      await heapcontract.insert(orderId, price, quantity);
  }

  // Get the heap array
  const heapArray = await heapcontract.getHeap();

  // Print the heap array
  console.log("Heap Array:");
  for (let i = 0; i < heapArray.length; i++) {
      console.log(`Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`);
  }
});
//testing all function for random generated datapoints.

it("1. should print the heap", async function () {
  // Get the heap array
  const heapArray = await heapcontract.getHeap();

  // Print the heap array
  console.log("Heap Array:");
  for (let i = 0; i < heapArray.length; i++) {
    console.log(
      `Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`
    );
  }
});


it("2. sort price", async function () {
  await heapcontract.sortPrice();
 
 // Get the sorted prices
 const sortedPrices = await heapcontract.getSortedPrices();
 // Display the sorted prices
 console.log("Sorted Prices:");
     for (let i = 0; i < sortedPrices.length; i++) {
       console.log(sortedPrices[i].toString());
     }
     console.log("Sorted Prices end");
    
});

it("2.1 heap after sort", async function () {
  // Get the heap array
  const heapArray = await heapcontract.getHeap();

  // Print the heap array
  console.log("Heap after sort");
  for (let i = 0; i < heapArray.length; i++) {
    console.log(
      `Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`
    );
  }
});



it("3. find the max price", async function () {
  // Find the max price
  const maxOrder = await heapcontract.findMax();

  // Log the max price details
  console.log("Max Price Order ID:", maxOrder.id.toString());
  console.log("Max Price:", maxOrder.price.toString());
  console.log("Max Quantity:", maxOrder.quantity.toString());

});

it("4. find the min price", async function () {

  const minOrder = await heapcontract.findMin();

      // Log the max price details
      console.log("Order ID:", minOrder.id.toString());
      console.log("Min Price:", minOrder.price.toString());
      console.log("Quantity:", minOrder.quantity.toString());
  

});

it("5. pop max", async function () {

  const max = await heapcontract.popMax();

});

it("6. heap after pop max", async function () {
  // Get the heap array
  const heapArray = await heapcontract.getHeap();

  // Print the heap array
  console.log("Heap after pop max");
  for (let i = 0; i < heapArray.length; i++) {
    console.log(
      `Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`
    );
  }
});


it("C. insert 1000 random data points and print the heap", async function () {
    
  for (let i = 0; i < 1000; i++) {
      const orderId = Date.now() + i; // Using timestamp + loop index as the Order ID to ensure uniqueness
      const price = Math.floor(Math.random() * 1000000) + 1; // Random price between 1 and 1,000,000
      const quantity = Math.floor(Math.random() * 100) + 1; // Random quantity between 1 and 100
      await heapcontract.insert(orderId, price, quantity);
  }

  // Get the heap array
  const heapArray = await heapcontract.getHeap();

  // Print the heap array
  console.log("Heap Array:");
  for (let i = 0; i < heapArray.length; i++) {
      console.log(`Order ID: ${heapArray[i].id}, Price: ${heapArray[i].price}, Quantity: ${heapArray[i].quantity}`);
  }
});




})























