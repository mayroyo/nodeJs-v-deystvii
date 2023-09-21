function asyncFunction(callback) {
  setTimeout(callback, 200);
}

let color = "blue";

// анонимная функция
((color) => {
  asyncFunction(() => {
    console.log("The color is ", color);
  });
})(color);

color = "green";
