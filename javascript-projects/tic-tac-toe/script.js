let activePlayerX = true;

boxes = document.querySelectorAll(".cell");
exitt = document.querySelector(".exit-btn");
head = document.querySelector(".header");
const winning = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let changes = 0;
const checkWinner = (active) => {
  for (pattern of winning) {
    if (document.getElementById(`box-${pattern[0]}`).textContent == "") {
      continue;
    } else if (
      document.getElementById(`box-${pattern[0]}`).textContent ==
        document.getElementById(`box-${pattern[1]}`).textContent &&
      document.getElementById(`box-${pattern[1]}`).textContent ==
        document.getElementById(`box-${pattern[2]}`).textContent
    ) {
      if (active) {
        head.textContent = "X is the Winner!!";
      } else {
        head.textContent = "O is the Winner!!";
      }
      boxes.forEach((i) => {
        i.disabled = true;
      });
      changes++;
    }
  }
  changes++;
  if (changes == 9) {
    head.textContent = "NO ONE WINS!!";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (activePlayerX === true) {
      box.innerText = "X";
      activePlayerX = false;
    } else {
      box.innerText = "O";
      activePlayerX = true;
    }
    checkWinner(!activePlayerX);
    box.disabled = true;
  });
});

exitt.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    head.textContent = "TIC-TAC-TOE";
    changes = 0;
  });
});
