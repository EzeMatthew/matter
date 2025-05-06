const increase = document.querySelector(".increase ");
console.log(increase);

const decrease = document.querySelector(".decrease ");
console.log(decrease);

const Reset = document.querySelector(".Reset");
console.log(Reset);

let score = JSON.parse(localStorage.getItem("price")) || { num: 0 };

increase.addEventListener("click", function () {
  score.num++;
  localStorage.setItem("price", JSON.stringify(score));
  console.log(localStorage.price);
});

decrease.addEventListener("click", function () {
  score.num--;

  localStorage.setItem("price", JSON.stringify(score));
  console.log(localStorage.price);
});

Reset.addEventListener("click", function () {
  localStorage.removeItem("price");
});

const square = document.querySelector("#square");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // makes animation lasts 2 seconds
    iterations: Infinity, // loops indefinitely
    direction: "alternate", // moves back and forth
    easing: "ease-in-out", // smooth easing
  }
);
play();
