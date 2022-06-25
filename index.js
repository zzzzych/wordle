window.addEventListener("DOMContentLoaded", function () {
  let answer = "pizza";
  let typeWord = document.querySelectorAll(".board-line input");
  for (let i = 0; i < 25; i++) {
    typeWord[i].addEventListener("keyup", function (e) {
      if (typeWord[i].value.length == 1) {
        if (i < 4) {
          typeWord[i + 1].focus();
        } else if (i > 4 && i < 9) {
          typeWord[i + 1].focus();
        } else if (i > 9 && i < 14) {
          typeWord[i + 1].focus();
        } else if (i > 14 && i < 19) {
          typeWord[i + 1].focus();
        } else if (i > 19 && i < 24) {
          typeWord[i + 1].focus();
        }
      }
    });
    typeWord[i].addEventListener("keydown", function (e) {
      console.log(e.keyCode);
      if (e.keyCode == 8) {
        typeWord[i - 1].focus();
      }
    });
  }
  for (let j = 0; j < 5; j++) {
    typeWord[5 * j + 4].addEventListener("keypress", function (e) {
      let enter = e.keyCode;
      if (enter == 13) {
        if (typeWord[5 * j + 4].value !== "") {
          let typeVal = document.querySelectorAll(".input");
          for (let i = 0; i < 5; i++) {
            if (typeVal[i].value == answer[i]) {
              typeVal[i].style.background = "#81bef7";
            } else if (typeVal[i].value == answer[i]) {
              typeVal[i].style.background = "#FAAC58";
            } else {
              typeVal[i].style.background = "#FA5858";
            }
            typeVal[i].classList.remove("input");
          }
          let last = e.target.parentNode.nextElementSibling;
          let moveNext = last.children;
          for (let i = 0; i < 5; i++) {
            moveNext[i].classList.add("input");
          }
          moveNext[0].focus();
        } else {
          return alert("단어를 입력해주세요.");
        }
      } else {
        // e.preventDefault();
      }
    });
  }

  let resetBtn = this.document.querySelector(".reset");
  resetBtn.addEventListener("click", function () {
    let boardLine = document.querySelectorAll(".board-line");
    let resetInput = document.querySelectorAll(".board input");
    for (let i = 0; i < 25; i++) {
      resetInput[i].style.background = "#999";
      resetInput[i].value = "";
    }
    for (let k = 0; k < 5; k++) {
      boardLine[0].children[k].classList.add("input");
    }
  });
});
