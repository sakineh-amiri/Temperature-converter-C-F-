let $ = document;
let heading1 = $.querySelector(".heading");
let input = $.querySelector("#input");
let heading2 = $.querySelector(".massage");
let convertBut = $.querySelector(".convert");
let resetBut = $.querySelector(".reset");
let changeBut = $.querySelector(".change");
let flag = true;
function convert(params) {
  if (isNaN(+input.value)) {
    heading2.innerHTML = "wrong input";
  } else if (input.value === "") {
    heading2.innerHTML = "wrong input";
  } else if (flag === false) {
    console.log((+input.value * 9) / 5 + 32);
    heading2.innerHTML = (+input.value - 32) * (5 / 9) + " °C";
    console.log(+input.value);
  } else if (flag === true) {
    heading2.innerHTML = (+input.value * 9) / 5 + 32 + " °F";
  }
}

function reset(params) {
  console.log("reset");
  input.value = "";
  heading2.innerHTML = "";
}

function change(params) {
  console.log("change");
  if (flag) {
    input.setAttribute("placeholder", "°F");
    document.title = "°F to °C  ";
    heading1.innerHTML = "Convertor °F to °C";
    flag = false;
  } else {
    input.setAttribute("placeholder", "°C");
    document.title = "°C to °F  ";
    heading1.innerHTML = "Convertor °C to °F";
    flag = true;
  }
}

convertBut.addEventListener("click", convert);
resetBut.addEventListener("click", reset);
changeBut.addEventListener("click", change);

// console.log(Boolean(isNaN(+"")));//false
