const myButton = document.getElementById("my-button-id");
const someObject = { aProperty: "Data" };

myButton.addEventListener("click", () => {
  console.log(someObject.aProperty); // Expected Value: 'Data
  someObject.aProperty = "Data Again"; // Change the value
 // console.log(someObject.aProperty);
});
console.log("outside" + someObject.aProperty); // Expected Value: 'Data'
setInterval(() => {
  if (someObject.aProperty === "Data Again") {
    console.log("inside Data Again: True");
    someObject.aProperty = "Data"; // Reset value to wait for next event execution
  }
}, 3000);