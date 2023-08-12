// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/**
 * @title HeapOrderbook
 * @dev A contract to maintain a max-heap unique orderbook based on order prices.
 */
//change
contract HeapOrderbook {
     /**
     * @dev Public function to insert a new order into the order book and maintain the min-heap property.
     * @param id The unique identifier for the new order.
     * @param price The price of the new order.
     * @param quantity The quantity of the new order.
     */
    struct Orderbook {
        uint256 id;     // Unique order identifier
        uint256 price;
        uint256 quantity; //amount
    }

    mapping(uint256 => Orderbook) public orderHeap;
    mapping(uint256 => bool) public orderExists; // Check if order ID exists in the order book
    uint256 public heapSize;

    uint256[] public sortedPrices; // Array to store sorted prices

    function buildHeap() internal {
        for (uint256 i = heapSize / 2; i > 0; i--) {
            minHeapify(i);
        }
    }

    function minHeapify(uint256 i) internal {
        uint256 minIndex = i;
        uint256 leftChildIndex = 2 * i;
        uint256 rightChildIndex = 2 * i + 1;

        if (leftChildIndex <= heapSize && orderHeap[leftChildIndex].price < orderHeap[minIndex].price) {
            minIndex = leftChildIndex;
        }

        if (rightChildIndex <= heapSize && orderHeap[rightChildIndex].price < orderHeap[minIndex].price) {
            minIndex = rightChildIndex;
        }

        if (minIndex != i) {
            Orderbook memory temp = orderHeap[i];
            orderHeap[i] = orderHeap[minIndex];
            orderHeap[minIndex] = temp;
            minHeapify(minIndex);
        }
    }
    
    function getHeap() public view returns (Orderbook[] memory) {
        Orderbook[] memory heapArray = new Orderbook[](heapSize);
        for (uint256 i = 1; i <= heapSize; i++) {
            heapArray[i - 1] = orderHeap[i];
        }
        return heapArray;
    }

function sortPrice() public {
    for (uint256 i = 1; i < heapSize; i++) {
        uint256 key = orderHeap[i + 1].price;
        uint256 j = i;
        while (j >= 1 && orderHeap[j].price < key) {
            orderHeap[j + 1].price = orderHeap[j].price;
            j--;
        }
        orderHeap[j + 1].price = key;
    }

    sortedPrices = new uint256[](heapSize);
    for (uint256 i = 0; i < heapSize; i++) {
        sortedPrices[i] = orderHeap[i + 1].price;
    }
}

    function findMin() public view returns (Orderbook memory) {
        require(heapSize > 0, "Heap is empty");
        return orderHeap[heapSize];
    }

    function findMax() public view returns (Orderbook memory) {
    require(heapSize > 0, "Heap is empty");
    return orderHeap[1];
}

 
  function popMax() public {
    require(heapSize > 0, "Heap is empty");
    uint256 maxOrderId = orderHeap[1].id;
    orderExists[orderHeap[1].id] = false;
    orderHeap[1] = orderHeap[heapSize];
    delete orderHeap[heapSize];
    heapSize--;
    minHeapify(1); 
    delete orderExists[maxOrderId];
}

    function insert(uint256 orderId, uint256 price, uint256 quantity) public {
        require(orderId > 0, "Invalid Order ID");
        require(price > 0, "Invalid Price");
        require(quantity > 0, "Invalid Quantity");
        require(!orderExists[orderId], "Order with the same ID already exists");

        heapSize++;
        Orderbook memory newOrder = Orderbook(orderId, price, quantity);
        orderHeap[heapSize] = newOrder;
        orderExists[orderId] = true;

        uint256 currentIndex = heapSize;
        Orderbook memory parentOrder = orderHeap[currentIndex / 2];

        while (currentIndex > 1 && orderHeap[currentIndex].price < parentOrder.price) {
            orderHeap[currentIndex] = parentOrder;
            orderHeap[currentIndex / 2] = newOrder;
            currentIndex /= 2;
            parentOrder = orderHeap[currentIndex / 2];
        }
    }

    function getSortedPrices() public view returns (uint256[] memory) {
       
        return sortedPrices;
    }

}

