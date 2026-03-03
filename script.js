const urlParams = new URLSearchParams(window.location);

let size = 20;
let count = 1;
let mod = 0;

for (const [key, val] of urlParams) {
  switch(key) {
    case "size":
      size = parseInt(val);
    case "count":
      count = parseInt(val);
    case "mod":
      mod = parseInt(val);
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

document.getElementById("rolls").innerText = "Roll(s): " + results.toString();
document.getElementById("result").innerText = "Result: " + result.toString();
