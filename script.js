console.log("✅ script.js is loaded in the browser");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM is ready");

  // --- DOM elements ---
  let button = document.querySelector(".actionButton");
  let output = document.querySelector("#output");

  if (button) {
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      if (output) {
        output.innerText = "You clicked the button!";
      }
    });
  } else {
    console.error("❌ .actionButton not found");
  }

  // -----------------------------
  // Debugging Exercise Examples
  // -----------------------------

  // Error 1 (fixed)
  let message = "Welcome to the debugging exercise!";
  console.log(message);

  // Error 6 (variable scope)
  function updateMessage() {
    let localMessage = "Updated message";
    return localMessage;
  }
  console.log(updateMessage());

  // Error 7 (event handler usage corrected)
  function testFunction() {
    console.log("Test function executed");
  }
  if (button) {
    button.addEventListener("click", testFunction);
  }

  // Error 8 (math logic corrected)
  let number1 = 10;
  let number2 = 5;
  console.log("Sum is: " + (number1 + number2));

  // Error 9 (null check)
  let nullVar = null;
  if (nullVar === null) {
    console.error("nullVar is null");
  }

  // Error 10 (case sensitivity)
  let caseSensitiveVar = "Case matters";
  console.log(caseSensitiveVar);

  // Error 11 (log variable, not string)
  let importantData = "This string must be logged to the console. It's important!";
  console.log(importantData);

  // Error 13 (works fine)
  let user = { name: "Alice" };
  console.log(user.name);

  // Error 14 (wrong type method)
  let someNumber = 123;
  console.log(String(someNumber).toUpperCase());

  // Error 15 (string quotes fixed)
  let greeting = "Hello, world!";
  console.log(greeting);

  // Error 16 (for loop corrected)
  for (let index = 0; index < 5; index++) {
    console.log(index);
  }

  // Error 17 (strict equality fix)
  let five = "5";
  if (Number(five) === 5) {
    console.log("Five is equal to 5");
  } else {
    console.log("Five is not equal to 5");
  }

  // Error 18 (don’t override Array.push)
  let numbers = [];
  numbers.push(1);
  console.log(numbers);

  // Error 19 (declare before use)
  let x = 5;
  console.log(x);

  // Error 20 (primitive property fix)
  let myString = "Hello";
  let wrapper = { property: "World" };
  console.log(wrapper.property);
});
