// Function definition: calculateTotalDiscount takes a discount and an arbitrary number of prices
//rest operators example
function calculateTotalDiscount(discount, ...prices) {
    const discountedPrices = prices.map(price => price * (1 - discount));
  
    return discountedPrices.reduce((total, discountedPrice) => total + discountedPrice, 0);
  }
  
 
  const total = calculateTotalDiscount(0.1, 50, 30, 20);
  

  
  console.log(total);
  //spread operators example
  function displayInfo(name, age, city) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  }
  
  const personInfor = ["John", 30, "New York"];
  displayInfo(...personInfor);
  // Output: Name: John, Age: 30, City: New York
  