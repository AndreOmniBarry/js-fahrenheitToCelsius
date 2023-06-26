// 3. Convert Fahrenheit to celsius
function convert(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius;
  }
  
  let fahrenheit = prompt("Enter Fahrenheit temperature:");
  const celsius = convert(fahrenheit);
  console.log(celsius);
  
  