const urlParams = new URLSearchParams(window.location.search);
let size = 20;
let count = 1;
let mod = 0;

for (const [key, val] of urlParams) {
  switch(key) {
    case "size":
      size = parseInt(val, 10);
      break;
    case "count":
      count = parseInt(val, 10);
      break;
    case "mod":
      mod = parseInt(val);
      break;
    default:
      console.log(key);
      break;
  }
}

let result = mod;
let results = "";
while (count > 0) {
  count--;
  
  let roll = Math.floor(Math.random() * size) + 1
  result += roll;
  
  if (results != "") {
    results += ", "
  }
  
  results += roll.toString()
}

document.getElementById("rolls").innerText = "Roll(s): " + results.toString() + "\n" + result.toString();
