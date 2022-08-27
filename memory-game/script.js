const cardArray = [
  {
    name: "fries",
    img: "./img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./img/hotdog.png",
  },
  {
    name: "ice cream",
    img: "./img/ice-cream.png",
  },
  {
    name: "milk shake",
    img: "./img/milkshake.png",
  },
  {
    name: "pizza",
    img: "./img/pizza.png",
  },
  {
    name: "fries",
    img: "./img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./img/hotdog.png",
  },
  {
    name: "ice cream",
    img: "./img/ice-cream.png",
  },
  {
    name: "milk shake",
    img: "./img/milkshake.png",
  },
  {
    name: "pizza",
    img: "./img/pizza.png",
  },
];

const scoreDisplay = document.getElementById("result");
const lifeEl = document.getElementById("life");
let life = ["❤️", "❤️", "❤️"];
let playing = true;
let scores = 0;
let selected = [];

renderLife(false);
cardArray.sort(() => 0.5 - Math.random());

function shuffle() {
  cardArray.map((el) => {
    const image = new Image();
    const div = document.createElement("div");

    image.src = el.img;

    div.appendChild(image);
    div.setAttribute("data-name", el.name);
    grid.appendChild(div);
  });
}

shuffle();

addClassToAll(".grid div", "select");

function app() {
  let wait = new Promise((resolve, reject) => {
    setTimeout(function () {
      removeClassToAll(".grid div", "select");
      resolve();
    }, 1500);
  });

  wait
    .then(() => {
      document.querySelectorAll(".grid div").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (el.classList.contains("permanent") || !playing) return;

          el.classList.add("select");
          selected[selected.length] = el;

          if (
            selected.length === 2 &&
            selected[0].dataset.name === selected[1].dataset.name
          ) {
            scores++;
            scoreDisplay.innerText = scores;

            selected[0].classList.add("permanent");
            selected[1].classList.add("permanent");

            removeClassToAll(".permanent", "selected");
            selected = [];
          } else if (selected.length === 2) {
            setTimeout(removeClassToAll.bind(this, ".grid div", "select"), 500);
            selected = [];
            renderLife(true);
          }

          if (scores === 6) {
            scoreDisplay.innerText = scores + "  (You win !)";
            playing = false;
            showHideElement("block", ".cover", "button");
            document.querySelector(".popup").classList.add("pop");
          }

          if (life.length === 0) {
            lifeEl.innerText = "none (You lost)";
            playing = false;
            showHideElement("block", ".cover", "button");
            document.querySelector(".popup").classList.add("pop");
          }
        });
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

app();

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  selected = [];
  playing = true;
  scores = 0;
  scoreDisplay.innerText = scores;
  life = ["❤️", "❤️", "❤️"];
  document
    .querySelectorAll(".permanent")
    .forEach((el) => el.classList.remove(".permanent"));
  document.querySelector(".popup").classList.remove("pop");
  grid.innerHTML = "";
  renderLife(false);
  showHideElement("none", ".cover", "button");
  shuffle();
  addClassToAll(".grid div", "select");
  app();
});

// utility (resusable functions)
function addClassToAll(selector, cls) {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.add(cls);
  });
}

function removeClassToAll(selector, cls) {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.remove(cls);
  });
}

function renderLife(removeLast) {
  if (removeLast) life.pop();
  lifeEl.innerText = life.join("");
}

function showHideElement(option, ...el) {
  el.map((e) => (document.querySelector(e).style.display = option));
}
