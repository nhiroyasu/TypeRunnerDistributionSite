<script setup lang="ts">
import { onMounted } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";
import anime from "animejs";

let oneShotFlag = false;
let analytics = getAnalytics();

onMounted(() => {
  window.addEventListener("scroll", () => {
    const container = document.getElementById("container");
    const position = Math.floor(window.innerHeight - 64 * 4);
    if (container != null) {
      let offsetTop = Math.floor(container.getBoundingClientRect().top);
      if (offsetTop < position && oneShotFlag == false) {
        sendEvent();
        startShowingKeyboard();
      }
    }
  });
});

function sendEvent() {
  logEvent(analytics, "showApplicationMessage", {
    date: Date.now(),
  });
}

function startShowingKeyboard() {
  oneShotFlag = true;

  const tl = anime.timeline({});
  tl.add({
    targets: ".btm",
    opacity: [0, 1],
    translateY: function () {
      return [anime.stagger(-60, { grid: [15, 1], from: "last" }), 0];
    },
    duration: function () {
      return anime.random(600, 1200);
    },
    delay: function (el, i, length) {
      return 240 * ((length - i) / 14);
    },
    easing: "easeInOutCirc",
  });
  tl.add({
    targets: ".btm > span, .btm > img",
    opacity: [0, 1],
    duration: 200,
    easing: "easeInOutSine",
    complete: () => {
      startEnjoyTypingAnimation();
      animateBar();
    },
  });
}

function animateBar() {
  anime({
    targets: ".message .bar",
    duration: 800,
    opacity: [0.0, 1.0, 0.0],
    easing: "steps(1)",
    loop: true,
  });
}

const inputAnimationTime = 140;
const nextInputDelayTime = 100;
function startEnjoyTypingAnimation() {
  const tl = anime.timeline({
    duration: inputAnimationTime,
    delay: nextInputDelayTime,
    easing: "easeInOutSine",
  });

  tl.add({
    targets: ".key-e",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("E");
    },
  });
  tl.add({
    targets: ".key-n",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("EN");
    },
  });
  tl.add({
    targets: ".key-j",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJ");
    },
  });
  tl.add({
    targets: ".key-o",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJO");
    },
  });
  tl.add({
    targets: ".key-y",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY ");
    },
  });
  tl.add(
    {
      targets: ".key-t",
      scale: [1.0, 0.9, 1.0],
      complete: function () {
        setMessageText("ENJOY T");
      },
    },
    "+=500"
  );
  tl.add({
    targets: ".key-y",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TY");
    },
  });
  tl.add({
    targets: ".key-p",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYP");
    },
  });
  tl.add({
    targets: ".key-i",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPI");
    },
  });
  tl.add({
    targets: ".key-n",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPIN");
    },
  });
  tl.add({
    targets: ".key-g",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPING");
    },
  });
  tl.add({
    targets: ".key-1, .shift-right",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPING!");
      deleteTextAnimation();
    },
  });
}

function deleteTextAnimation() {
  const tl = anime.timeline({
    targets: ".delete",
    duration: 100,
    endDelay: 50,
  });
  tl.add({
    duration: 1000,
    scale: [1.0],
  });
  for (let index = 0; index < "ENJOY TYPING!".length; index++) {
    tl.add({
      scale: [1.0, 0.9, 1.0],
      complete: function () {
        let dom = document.querySelector(".message .text");
        if (dom != null) {
          dom.innerHTML = dom.innerHTML.slice(0, -1);
        }
      },
    });
  }
  tl.add({
    duration: 1000,
    scale: [1.0],
    complete: function () {
      startThankYouAnimation();
    },
  });
}

function startThankYouAnimation() {
  const tl = anime.timeline({
    duration: inputAnimationTime,
    delay: nextInputDelayTime,
    easing: "easeInOutSine",
  });

  tl.add({
    targets: ".key-t",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("T");
    },
  });
  tl.add({
    targets: ".key-h",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("TH");
    },
  });
  tl.add({
    targets: ".key-a",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("THA");
    },
  });
  tl.add({
    targets: ".key-n",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("THAN");
    },
  });
  tl.add({
    targets: ".key-k",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("THANK ");
    },
  });
  tl.add(
    {
      targets: ".key-y",
      scale: [1.0, 0.9, 1.0],
      complete: function () {
        setMessageText("THANK Y");
      },
    },
    "+=500"
  );
  tl.add({
    targets: ".key-o",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("THANK YO");
    },
  });
  tl.add({
    targets: ".key-u",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("THANK YOU");
    },
  });
  tl.add({
    targets: ".key-1, .shift-right",
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("THANK YOU!");
    },
  });
}

function setMessageText(text: string): void {
  let dom = document.querySelector(".message .text");
  if (dom != null) {
    dom.innerHTML = text;
  }
}
</script>

<template>
  <div class="message non-selection">
    <div class="text"></div>
    <div class="bar"></div>
  </div>
  <div class="container reveal" id="container">
    <div class="number-line line">
      <div class="btm key">
        <span>`</span>
      </div>
      <div class="btm key key-1">
        <span>1</span>
      </div>
      <div class="btm key">
        <span>2</span>
      </div>
      <div class="btm key">
        <span>3</span>
      </div>
      <div class="btm key">
        <span>4</span>
      </div>
      <div class="btm key">
        <span>5</span>
      </div>
      <div class="btm key">
        <span>6</span>
      </div>
      <div class="btm key">
        <span>7</span>
      </div>
      <div class="btm key">
        <span>8</span>
      </div>
      <div class="btm key">
        <span>9</span>
      </div>
      <div class="btm key">
        <span>0</span>
      </div>
      <div class="btm key">
        <span>-</span>
      </div>
      <div class="btm key">
        <span>=</span>
      </div>
      <div class="btm delete modify right-modify">
        <img src="@/assets/keyboard/backspace.svg" alt="#" />
      </div>
    </div>

    <div class="first-line line">
      <div class="btm tab modify left-modify">
        <img src="@/assets/keyboard/tab.svg" alt="#" />
      </div>
      <div class="btm key">
        <span>Q</span>
      </div>
      <div class="btm key">
        <span>W</span>
      </div>
      <div class="btm key key-e">
        <span>E</span>
      </div>
      <div class="btm key">
        <span>R</span>
      </div>
      <div class="btm key key-t">
        <span>T</span>
      </div>
      <div class="btm key key-y">
        <span>Y</span>
      </div>
      <div class="btm key key-u">
        <span>U</span>
      </div>
      <div class="btm key key-i">
        <span>I</span>
      </div>
      <div class="btm key key-o">
        <span>O</span>
      </div>
      <div class="btm key key-p">
        <span>P</span>
      </div>
      <div class="btm key">
        <span>[</span>
      </div>
      <div class="btm key">
        <span>]</span>
      </div>
      <div class="btm key">
        <span>|</span>
      </div>
    </div>

    <div class="second-line line">
      <div class="btm caplock modify left-modify">
        <img src="@/assets/keyboard/capslock.svg" alt="#" />
      </div>
      <div class="btm key key-a">
        <span>A</span>
      </div>
      <div class="btm key">
        <span>S</span>
      </div>
      <div class="btm key">
        <span>D</span>
      </div>
      <div class="btm key">
        <span>F</span>
      </div>
      <div class="btm key key-g">
        <span>G</span>
      </div>
      <div class="btm key key-h">
        <span>H</span>
      </div>
      <div class="btm key key-j">
        <span>J</span>
      </div>
      <div class="btm key key-k">
        <span>K</span>
      </div>
      <div class="btm key">
        <span>L</span>
      </div>
      <div class="btm key">
        <span>;</span>
      </div>
      <div class="btm key">
        <span>'</span>
      </div>
      <div class="btm enter modify right-modify">
        <img src="@/assets/keyboard/return.svg" alt="#" />
      </div>
    </div>

    <div class="third-line line">
      <div class="btm shift shift-left modify left-modify">
        <img src="@/assets/keyboard/shift.svg" alt="#" />
      </div>
      <div class="btm key">
        <span>Z</span>
      </div>
      <div class="btm key">
        <span>X</span>
      </div>
      <div class="btm key">
        <span>C</span>
      </div>
      <div class="btm key">
        <span>V</span>
      </div>
      <div class="btm key">
        <span>B</span>
      </div>
      <div class="btm key key-n">
        <span>N</span>
      </div>
      <div class="btm key">
        <span>M</span>
      </div>
      <div class="btm key">
        <span>,</span>
      </div>
      <div class="btm key">
        <span>.</span>
      </div>
      <div class="btm key">
        <span>/</span>
      </div>
      <div class="btm shift shift-right modify right-modify">
        <img src="@/assets/keyboard/shift.svg" alt="#" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";
@import "@/styles/classes.scss";
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");

.message {
  display: flex;
  font-weight: bold;
  font-family: "JetBrains Mono", monospace;
  margin-top: 128px;
  letter-spacing: 0.2rem;

  @include if_md_greater {
    height: 5.1rem;
    font-size: 5rem;
  }
  @include if_md_less {
    font-size: 2rem;
  }

  .bar {
    background: #fff;
    align-self: stretch;
    width: 3px;
    height: auto;
    margin-left: 8px;
    opacity: 0;
  }
}

.container {
  display: grid;
  margin-top: 32px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  gap: 8px;
  -webkit-perspective: 80vw;
  perspective: 80vw;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;

  @include if_md_less {
    display: none;
  }
}

.btm {
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #1eb5a4;
  color: white;
  opacity: 0;
  user-select: none;
}

.key {
  color: white;
  width: 64px;
  height: 64px;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "JetBrains Mono", monospace;
}

.modify {
  display: flex;

  img {
    width: 24px;
    height: 24px;
  }
}

.left-modify {
  justify-content: flex-start;
  padding-left: 16px;
}

.right-modify {
  justify-content: flex-end;
  padding-right: 16px;
}

.line {
  display: flex;
  gap: 8px;
}

.tab {
  width: 96px;
}

.caplock {
  width: 112px;
}

.shift {
  width: 136px;
}

.shift-right {
  flex-grow: 1;
}

.enter {
  flex-grow: 1;
}

.delete {
  flex-grow: 1;
}
</style>
