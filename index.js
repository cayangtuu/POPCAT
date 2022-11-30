const popImg = document.querySelector("#popImg");
const popTimes = document.querySelector("#popTimes");
const popAll = document.querySelector(".container");
popClose = "https://popcat.click/img/p.1e9d00be.png";
popOpen = "https://popcat.click/img/op.353767c3.png";
popSound =
  "https://www.myinstants.com/media/sounds/pop-cat-original-meme_3ObdYkj.mp3";

// function activePopcat：進行滑鼠點擊次數計算；進行圖片切換，若為關嘴貓，則圖片切換為開嘴貓，反之相反
function activePopcat() {
  popTimes.innerText = Number(popTimes.innerText) + 1;
  if (popImg.src === popClose) {
    popImg.src = popOpen;
  } else {
    popImg.src = popClose;
  }
}

// 放開滑鼠左鍵，會發出"波"的聲音
function makeSound() {
  const music = new Audio(popSound);
  music.play();
}

popAll.addEventListener("click", activePopcat);
popAll.addEventListener("mouseup", makeSound);