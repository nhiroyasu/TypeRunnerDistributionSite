<template>
  <div class="root">
    <div class="top">
      <div class="contents">
        <div class="app-name-wrapper">
          <img src="@/assets/logo.png" alt="#" width="256" />
          <div id="app-name">{{ appName }}</div>
        </div>
        <div id="app-message">{{ message }}</div>
        <install-button />
      </div>
      <div class="side-images">
        <img src="@/assets/background-item1.png" alt="#" />
      </div>
    </div>
    <div class="description-group">
      <div class="title">Recording typing count</div>
      <div class="feature">
        <div class="image1 reveal">
          <img src="@/assets/window.png" alt="#" width="100%" />
        </div>
        <div class="text1 reveal">
          <div class="feature-number">First</div>
          <div class="feature-text">Typing History</div>
        </div>
        <div class="image2 reveal">
          <img src="@/assets/widget.png" alt="#" width="100%" />
        </div>
        <div class="text2 reveal">
          <div class="feature-number">Second</div>
          <div class="feature-text">Widget</div>
        </div>
        <div class="image3 reveal">
          <img src="@/assets/menu.png" alt="#" />
        </div>
        <div class="text3 reveal">
          <div class="feature-number">Third</div>
          <div class="feature-text">Menu</div>
        </div>
      </div>
    </div>
    <div class="message">Enjoy typing!</div>
    <div class="copy-right-group">
      <div class="app">
        <img src="@/assets/logo.png" alt="#" class="icon" />
        <div class="name">{{ appName }}</div>
      </div>
      <div class="copy-right">© Hiroyasu Niitsuma</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InstallButton from "@/components/InstallButton.vue";
import ScrollReveal from "scrollreveal";

export default defineComponent({
  name: "Home",
  components: {
    InstallButton,
  },
  data() {
    return {
      appName: "TypeRunner",
      message: "Let's count your typing.",
      message2: "Enjoy typing !",
    };
  },
  mounted() {
    ScrollReveal().reveal(".reveal", {
      duration: 1500,
      distance: "100px",
      opacity: 0,
      viewFactor: 1.0,
    });
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";
@import "@/styles/color.scss";

.root {
  display: grid;
  justify-content: center;
  justify-items: center;
  margin: 0 64px;
  padding-bottom: 64px;
  height: 100%;
}
.top {
  width: 100%;
  max-width: 1600px;
  height: 100vh;

  display: grid;
  justify-content: center;
  align-content: center;

  @include if_md_greater {
    grid-template-areas: "content side-image";
    grid-template-columns: 1fr 1fr;
  }
  @include if_md_less {
    grid-template-areas:
      "content"
      "side-image";
    grid-template-columns: 1fr;
  }
}

.side-images {
  grid-area: side-image;
  justify-self: end;
  width: 100%;
  height: 100%;
  text-align: end;

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
    color: $primary;
    font-size: 2em;
    font-weight: bold;
  }

  #app-message {
    font-size: 1.4em;
    font-weight: bold;
  }
}

.description-group {
  font-weight: bold;
  width: 100%;

  @include if_md_greater {
    font-size: 3rem;
  }
  @include if_md_less {
    font-size: 1.6rem;
  }

  .title {
    color: $primary;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 64px;
  }

  .feature {
    display: grid;

    @include if_md_greater {
      grid-template-areas:
        "feature1-image feature1-text"
        "feature2-text feature2-image"
        "feature3-text feature3-text"
        "feature3-image feature3-image";
      grid-template-columns: 1fr 1fr;
      gap: 0 128px;
    }
    @include if_md_less {
      grid-template-areas:
        "feature1-text"
        "feature1-image"
        "feature2-text"
        "feature2-image"
        "feature3-text"
        "feature3-image";
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
      text-align: center;
    }

    .feature-number {
      color: $secondary;
    }

    .feature-text {
      color: #ffffff;
      font-size: 1.5em;
    }

    .image1 {
      grid-area: feature1-image;
      width: 100%;
      @include if_md_greater {
        justify-self: center;
      }
    }

    .text1 {
      grid-area: feature1-text;
      @include if_md_greater {
        align-self: center;
        justify-self: start;
        text-align: start;
      }
    }

    .image2 {
      grid-area: feature2-image;
      @include if_md_greater {
        justify-self: start;
        margin-top: 196px;
      }
      @include if_md_less {
        margin-top: 16px;
      }
    }

    .text2 {
      grid-area: feature2-text;
      @include if_md_greater {
        align-self: center;
        justify-self: center;
        text-align: center;
        margin-top: 196px;
      }
      @include if_md_less {
        margin-top: 32px;
      }
    }

    .image3 {
      grid-area: feature3-image;
      @include if_md_greater {
        justify-self: center;
      }
      @include if_md_less {
        margin-top: 16px;
      }
    }

    .text3 {
      grid-area: feature3-text;
      @include if_md_greater {
        justify-self: center;
        text-align: center;
        margin: 256px 0 32px 0;
      }
      @include if_md_less {
        margin-top: 32px;
      }
    }
  }
}

.message {
  font-weight: bold;
  margin-top: 256px;

  @include if_md_greater {
    font-size: 5rem;
  }
  @include if_md_less {
    font-size: 2rem;
  }
}

.copy-right-group {
  padding-bottom: 32px;
  @include if_md_greater {
    margin-top: 128px;
  }
  @include if_md_less {
    margin-top: 32px;
  }

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;

    .icon {
      height: 100%;
    }

    .name {
      color: $primary;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .copy-right {
    font-size: 1rem;
    text-align: center;
  }
}
</style>
