<template>
  <div class="home">
    <img src="@/assets/logo.png" alt="#" width="256" />
    <div id="app-name">TypeRunner</div>
    <a
      href="http://google.com"
      target="_blank"
      rel="noopener noreferrer"
      class="install-button"
    >
      <img src="@/assets/save.svg" alt="#" />
      <div>Install for macOS</div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1eb5a4;
}

#app-name {
  font-size: 4rem;
  font-weight: bold;
}

.install-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background: #ffffff;
  border-radius: 16px;
  font-size: 24px;
  font-weight: bold;
  padding: 0px 32px;
  margin: 32px;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: 0.16);
  transition: all 0.3s linear;
  text-decoration: none;
  color: #1eb5a4;

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  &:hover {
    box-shadow: 0px 4px 8px rgba($color: #000000, $alpha: 0.32);
  }
}
</style>
