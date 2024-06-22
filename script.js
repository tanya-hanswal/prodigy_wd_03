let btns = document.querySelectorAll(".btn");
let winPlayer = document.querySelector(".player");

let turn = "X";
let isGameOver = false;

btns.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      changeTurn();
      checkWinner();
      checkDraw();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "0";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0";
  }
}

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
function checkWinner() {
  for (let i = 0; i < winPattern.length; i++) {
    let val0 = btns[winPattern[i][0]].innerHTML;
    let val1 = btns[winPattern[i][1]].innerHTML;
    let val2 = btns[winPattern[i][2]].innerHTML;

    if (val0 != "" && val0 === val1 && val0 === val2) {
      isGameOver = true;

      showWinner(val0);
      for (j = 0; j < 3; j++) {
        btns[winPattern[i][j]].style.backgroundColor = "#ccff33";
        btns[winPattern[i][j]].style.color = "brown";
      }
    }
  }
}
const showWinner = (winner) => {
  winPlayer.innerText = `Player ${winner} won the game`;
};

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    btns.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });
    if (isDraw) {
      isGameOver = true;
      winPlayer.innerText = "Draw";
    }
  }
}

document.querySelector(".play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  winPlayer.innerHTML = "";

  btns.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
  });
});

// let restart_btn = document.querySelector(".restart");

// let newGameBtn = document.querySelector(".play-again");
// let playerturn = document.querySelector(".playerturn");

// let turnX = true;

// const restartGame = () => {
//   turnX = true;
//   newgame();
// };

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (turnX) {
//       btn.innerHTML = "X";
//       btn.style.color = "#57f34e";
//       turnX = false;
//     } else {
//       btn.innerHTML = "0";
//       turnX = true;
//     }

//     btn.disabled = true;
//     checkWinner();

//   });
// });

// const disableBtns = () => {
//   for (let btn of btns) {
//     btn.disabled = true;
//   }
// };
// const newgame = () => {
//   for (let btn of btns) {
//     btn.disabled = false;
//     btn.innerHTML = "";
//   }
// };

// const showWinner = (winner) => {
//   winPlayer.innerText = `Player ${winner} won the game`;
//   disableBtns();
// };

// const checkWinner = () => {
//   for (let pattern of winPattern) {
//     let val1 = btns[pattern[0]].innerHTML;
//     let val2 = btns[pattern[1]].innerHTML;
//     let val3 = btns[pattern[2]].innerHTML;

//     if (val1 != "" && val2 != "" && val3 != "") {
//       if (val1 === val2 && val2 === val3) {
//         showWinner(val1);
//       }
//     }
//   }
// };

// newGameBtn.addEventListener("click", () => {
//   restartGame();
//   winPlayer.innerText = "";
// });
