<template>
  <div class="root">
    <div class="top">
      <div class="contents">
        <div class="app-name-wrapper">
          <img src="@/assets/logo.png" alt="#" width="256" />
          <div id="app-name">{{ appName }}</div>
        </div>
        <div id="app-message">{{ message }}</div>
        <a
          :href="donwloadLink"
          target="_blank"
          rel="noopener noreferrer"
          class="install-button"
        >
          <img src="@/assets/save.svg" alt="#" />
          <div>Install for macOS</div>
        </a>
      </div>
      <div class="side-images">
        <img src="@/assets/background-item1.png" alt="#" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      donwloadLink:
        "https://firebasestorage.googleapis.com/v0/b/typerunner.appspot.com/o/distribution%2FTypeRunnerInstaller%20version1.0.0.dmg?alt=media&token=dc96004f-d57f-4db6-925d-55caeaf823b4",
      appName: "TypeRunner",
      message: "Let's count your typing.",
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";

.root {
  padding: 0px 64px;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;

  @include phone_only {
    padding: 0;
  }
}
.top {
  width: 100%;
  max-width: 1600px;
  height: 100vh;

  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-areas:
    "content"
    "side-image";
  grid-template-columns: 1fr;

  @include if_md_greater {
    grid-template-areas: "content side-image";
    grid-template-columns: 1fr 1fr;
  }
}

.side-images {
  grid-area: side-image;
  justify-self: end;
  width: 100%;
  height: 100%;

  @include if_md_greater {
    margin-top: 0px;
  }
  @include if_md_less {
    margin-top: 32px;
  }

  img {
    width: 80%;
  }
}

.contents {
  grid-area: content;
  height: 100%;
  color: #1eb5a4;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @include if_md_greater {
    font-size: 2rem;
    align-items: flex-start;
  }
  @include if_md_less {
    font-size: 1rem;
    align-items: center;
  }

  .app-name-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    img {
      $icon-size: 96px;
      height: $icon-size;
      width: $icon-size;
    }
  }

  #app-name {
    font-size: 2em;
    font-weight: bold;
  }

  #app-message {
    font-size: 1.4em;
    color: #ffffff;
  }
}

.install-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #ffffff;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0px 32px;
  cursor: pointer;
  transition: all 0.3s linear;
  text-decoration: none;
  color: #1eb5a4;

  @include if_md_greater {
    margin-top: 48px;
  }
  @include if_md_less {
    margin-top: 16px;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  &:hover {
    box-shadow: 6px 6px 0px rgba($color: #007e70, $alpha: 0.8);
  }
}
</style>
