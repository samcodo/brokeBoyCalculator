let total = 0;

document.querySelector("#add").addEventListener("click", addOne);
document.querySelector("#sub").addEventListener("click", subOne);
document.querySelector("#mul").addEventListener("click", mulTwo);
document.querySelector("#div").addEventListener("click", divTwo);

function addOne() {
  total += 1;
  document.querySelector("#result").innerText = total;
}

function subOne() {
  total -= 1;
  document.querySelector("#result").innerText = total;
}

function mulTwo() {
  total *= 2;
  document.querySelector("#result").innerText = total;
}

function divTwo() {
  total /= 2;
  document.querySelector("#result").innerText = total;
}
