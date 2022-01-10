<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";

let oneShotFlag = false;

onMounted(() => {
  window.addEventListener("scroll", () => {
    const container = document.getElementById("container");
    const position = Math.floor(window.innerHeight - 64 * 4);
    if (container != null) {
      let offsetTop = Math.floor(container.getBoundingClientRect().top);
      if (offsetTop < position && oneShotFlag == false) {
        startShowingKeyboard();
      }
    }
  });
});

function startShowingKeyboard() {
  anime({
    targets: ".btm",
    scaleX: [0, 1],
    scaleY: [0, 1],
    opacity: [0.5, 1],
    delay: anime.stagger(200, { grid: [14, 1], from: "center" }),
    duration: 300,
    easing: "easeOutSine",
    complete: function (anim) {
      startEnjoyTypingAnimation();
    },
  });
  oneShotFlag = true;
  anime({
    targets: ".message .bar",
    duration: 1000,
    opacity: [0.0, 1.0, 0.0],
    easing: "steps(1)",
    loop: true,
  });
}

function startEnjoyTypingAnimation() {
  const inputAnimationTime = 140;
  const tl = anime.timeline({
    duration: "ENJOYTYPING!".length * inputAnimationTime,
    delay: 200,
    easing: "easeInOutSine",
  });

  tl.add({
    targets: ".key-e",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("E");
    },
  });
  tl.add({
    targets: ".key-n",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("EN");
    },
  });
  tl.add({
    targets: ".key-j",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJ");
    },
  });
  tl.add({
    targets: ".key-o",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJO");
    },
  });
  tl.add({
    targets: ".key-y",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY ");
    },
  });
  tl.add(
    {
      targets: ".key-t",
      duration: inputAnimationTime,
      scale: [1.0, 0.9, 1.0],
      complete: function () {
        setMessageText("ENJOY T");
      },
    },
    "+=500"
  );
  tl.add({
    targets: ".key-y",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TY");
    },
  });
  tl.add({
    targets: ".key-p",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYP");
    },
  });
  tl.add({
    targets: ".key-i",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPI");
    },
  });
  tl.add({
    targets: ".key-n",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPIN");
    },
  });
  tl.add({
    targets: ".key-g",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPING");
    },
  });
  tl.add({
    targets: ".key-1, .shift-right",
    duration: inputAnimationTime,
    scale: [1.0, 0.9, 1.0],
    complete: function () {
      setMessageText("ENJOY TYPING!");
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
      <div class="btm key">`</div>
      <div class="btm key key-1">1</div>
      <div class="btm key">2</div>
      <div class="btm key">3</div>
      <div class="btm key">4</div>
      <div class="btm key">5</div>
      <div class="btm key">6</div>
      <div class="btm key">7</div>
      <div class="btm key">8</div>
      <div class="btm key">9</div>
      <div class="btm key">0</div>
      <div class="btm key">-</div>
      <div class="btm key">=</div>
      <div class="btm delete modify right-modify">
        <img src="@/assets/keyboard/backspace.svg" alt="#" />
      </div>
    </div>

    <div class="first-line line">
      <div class="btm tab modify left-modify">
        <img src="@/assets/keyboard/tab.svg" alt="#" />
      </div>
      <div class="btm key">Q</div>
      <div class="btm key">W</div>
      <div class="btm key key-e">E</div>
      <div class="btm key">R</div>
      <div class="btm key key-t">T</div>
      <div class="btm key key-y">Y</div>
      <div class="btm key">U</div>
      <div class="btm key key-i">I</div>
      <div class="btm key key-o">O</div>
      <div class="btm key key-p">P</div>
      <div class="btm key">[</div>
      <div class="btm key">]</div>
      <div class="btm key">|</div>
    </div>

    <div class="second-line line">
      <div class="btm caplock modify left-modify">
        <img src="@/assets/keyboard/capslock.svg" alt="#" />
      </div>
      <div class="btm key">A</div>
      <div class="btm key">S</div>
      <div class="btm key">D</div>
      <div class="btm key">F</div>
      <div class="btm key key-g">G</div>
      <div class="btm key">H</div>
      <div class="btm key key-j">J</div>
      <div class="btm key">K</div>
      <div class="btm key">L</div>
      <div class="btm key">;</div>
      <div class="btm key">'</div>
      <div class="btm enter modify right-modify">
        <img src="@/assets/keyboard/return.svg" alt="#" />
      </div>
    </div>

    <div class="third-line line">
      <div class="btm shift shift-left modify left-modify">
        <img src="@/assets/keyboard/shift.svg" alt="#" />
      </div>
      <div class="btm key">Z</div>
      <div class="btm key">X</div>
      <div class="btm key">C</div>
      <div class="btm key">V</div>
      <div class="btm key">B</div>
      <div class="btm key key-n">N</div>
      <div class="btm key">M</div>
      <div class="btm key">,</div>
      <div class="btm key">.</div>
      <div class="btm key">/</div>
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
