<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";

let oneShotFlag = false;

onMounted(() => {
  window.addEventListener("scroll", () => {
    const container = document.getElementById("container");
    const position = Math.floor(window.innerHeight * 0.5);
    if (container != null) {
      let offsetTop = Math.floor(container.getBoundingClientRect().top);
      if (offsetTop < position && oneShotFlag == false) {
        oneShotFlag = true;
        anime({
          targets: ".btm",
          scaleX: [0, 1],
          scaleY: [0, 1],
          opacity: [0, 1],
          delay: anime.stagger(200, { grid: [14, 1], from: "center" }),
          duration: 300,
          easing: "easeOutSine",
        });
      }
    }
  });
});
</script>

<template>
  <div class="container reveal" id="container">
    <div class="number-line line">
      <div class="btm key">`</div>
      <div class="btm key">1</div>
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
      <div class="btm delete modify">
        <img src="@/assets/keyboard/backspace.svg" alt="#" />
      </div>
    </div>

    <div class="first-line line">
      <div class="btm tab modify">
        <img src="@/assets/keyboard/tab.svg" alt="#" />
      </div>
      <div class="btm key">Q</div>
      <div class="btm key">W</div>
      <div class="btm key">E</div>
      <div class="btm key">R</div>
      <div class="btm key">T</div>
      <div class="btm key">Y</div>
      <div class="btm key">U</div>
      <div class="btm key">I</div>
      <div class="btm key">O</div>
      <div class="btm key">P</div>
      <div class="btm key">[</div>
      <div class="btm key">]</div>
      <div class="btm key">|</div>
    </div>

    <div class="second-line line">
      <div class="btm caplock modify">
        <img src="@/assets/keyboard/capslock.svg" alt="#" />
      </div>
      <div class="btm key">A</div>
      <div class="btm key">S</div>
      <div class="btm key">D</div>
      <div class="btm key">F</div>
      <div class="btm key">G</div>
      <div class="btm key">H</div>
      <div class="btm key">J</div>
      <div class="btm key">K</div>
      <div class="btm key">L</div>
      <div class="btm key">;</div>
      <div class="btm key">'</div>
      <div class="btm enter modify">
        <img src="@/assets/keyboard/return.svg" alt="#" />
      </div>
    </div>

    <div class="third-line line">
      <div class="btm shift shift-left modify">
        <img src="@/assets/keyboard/shift.svg" alt="#" />
      </div>
      <div class="btm key">Z</div>
      <div class="btm key">X</div>
      <div class="btm key">C</div>
      <div class="btm key">V</div>
      <div class="btm key">B</div>
      <div class="btm key">N</div>
      <div class="btm key">M</div>
      <div class="btm key">,</div>
      <div class="btm key">.</div>
      <div class="btm key">/</div>
      <div class="btm shift shift-right modify">
        <img src="@/assets/keyboard/shift.svg" alt="#" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";

.container {
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  gap: 8px;

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
}

.key {
  width: 64px;
  height: 64px;
  font-weight: bold;
}

.modify {
  img {
    width: 24px;
    height: 24px;
  }
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
