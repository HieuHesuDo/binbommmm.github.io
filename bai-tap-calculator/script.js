function clean() {
  document.getElementById("inputArea").value = "";
}

function backSpace() {
  let inputValue = document.getElementById("inputArea");
  let x = inputValue.value;
  if (x.length > 0) {
    x = x.substr(0, x.length - 1);
    inputValue.value = x;
  }
}
function num(num) {
  inputValue = document.getElementById("inputArea");
  switch (num) {
    case 1:
      inputValue.value += "1";
      break;
    case 2:
      inputValue.value += "2";
      break;
    case 3:
      inputValue.value += "3";
      break;
    case 4:
      inputValue.value += "4";
      break;
    case 5:
      inputValue.value += "5";
      break;
    case 6:
      inputValue.value += "6";
      break;
    case 7:
      inputValue.value += "7";
      break;
    case 8:
      inputValue.value += "8";
      break;
    case 9:
      inputValue.value += "9";
      break;
    case 0:
      inputValue.value += "0";
      break;
  }
}

function math(math) {
  inputValue = document.getElementById("inputArea");
  switch (math) {
    case `+`:
      inputValue.value += "+";
      break;
    case `-`:
      inputValue.value += "-";
      break;
    case `*`:
      inputValue.value += "*";
      break;
    case `/`:
      inputValue.value += "/";
      break;
  }
}

function point() {
  inputValue.value += ".";
}

function equal() {
  inputValue.value = eval(inputValue.value);
}

function square() {
  if (inputValue.value == "") {
    inputValue.value = 0;
  } else{
    inputValue.value = eval(inputValue.value) * eval(inputValue.value);
  } 
}

function sqrt() {
  inputValue.value = Math.sqrt(inputValue.value);
}
