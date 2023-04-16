//  https://api.adviceslip.com/advice/{slip_id}
let btn = document.querySelector(".btn");
let span = document.querySelector("span");
let advice = document.querySelector("p");

btn.addEventListener("click", generateAdvice);

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => Response.json())
    .then((data) => {
      advice.innerText = `"${data.slip.advice}"`;
      span.innerText = `${data.slip.id}`;
    });
}
