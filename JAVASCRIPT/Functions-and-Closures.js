//Function  and clousers in javascript

//Example 1
function Multiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  
  const multiplyBy2 = Multiplier(2);
  const multiplyBy5 = Multiplier(5);
  
  console.log(multiplyBy2(3));  // Outputs: 6
  console.log(multiplyBy5(3));  // Outputs: 15
  

//Example 2
function createCounter() {
    let count = 0;  // This variable is private and cannot be accessed from outside
  
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  console.log(counter.increment());  // Outputs: 1
  console.log(counter.increment());  // Outputs: 2
  console.log(counter.getCount());   // Outputs: 2
  console.log(counter.decrement());  // Outputs: 1
  console.log(counter.getCount());   // Outputs: 1
  
