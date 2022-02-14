<template>
  <div class="root">
    <div class="top">
      <div class="contents">
        <div id="app-message">{{ message }}</div>
        <div class="app-name-wrapper">
          <img class="image-shadow" src="@/assets/logo.png" alt="ロゴ" />
          <div id="app-name" class="eng-font">{{ appName }}</div>
          <div class="app-short-description">{{ appShortDescription }}</div>
        </div>
        <install-button id="install-button" />
        <div class="app-support-os-version">{{ supportOSVersion }}</div>
      </div>
      <div class="side-images">
        <img
          id="mouse-transition-image"
          src="@/assets/background-item1.png"
          alt="背景画像"
          loading="lazy"
        />
      </div>
    </div>
    <div class="description-group">
      <div class="title">{{ contentMessage }}</div>
      <div class="sub-title">{{ contentSubMessage }}</div>
      <div class="feature">
        <div class="image1 reveal">
          <img src="@/assets/preview/dashboard.png" alt="ダッシュポード" loading="lazy" />
        </div>
        <div class="text1 reveal">
          <div class="feature-number">First</div>
          <div class="feature-text">{{ firstContentText }}</div>
          <div class="feature-description">{{ firstContentDescription }}</div>
        </div>
        <div class="image2 reveal">
          <img class="image-shadow" src="@/assets/widget.png" alt="ウィジェット" loading="lazy" />
        </div>
        <div class="text2 reveal">
          <div class="feature-number">Second</div>
          <div class="feature-text">{{ secondContentText }}</div>
          <div class="feature-description">{{ secondContentDescription }}</div>
          <div class="app-support-os-version">{{ widgetSupportOSVersion }}</div>
        </div>
        <div class="image3 reveal">
          <img class="image-shadow" src="@/assets/menu.png" alt="メニュー" loading="lazy" />
        </div>
        <div class="text3 reveal">
          <div class="feature-number">Third</div>
          <div class="feature-text">{{ thirdContentText }}</div>
          <div class="feature-description">{{ thirdContentDescription }}</div>
        </div>
      </div>
    </div>
    <application-message class="application-message" />
    <div class="copy-right-group">
      <div class="app">
        <img src="@/assets/logo.png" alt="ロゴ" class="icon" loading="lazy" />
        <div class="name eng-font">{{ appName }}</div>
      </div>
      <div class="copy-right eng-font">
        <a :href="mySiteUrl" target="_blank" rel="noopener noreferrer">© Hiroyasu Niitsuma</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import InstallButton from "@/components/InstallButton.vue";
import ApplicationMessage from "@/components/ApplicationMessage.vue";
import ScrollReveal from "scrollreveal";

const appName = "TypeRunner";
const appShortDescription = "タイピング回数記録アプリ";
const message = `いままでキーボードを叩いた回数\n気にならない？`;
const supportOSVersion = "*macOS 11.2 以降";
const widgetSupportOSVersion = "*macOS 12 以降";
const latestVersion = "1.1.0";

const contentMessage = "タイピングを記録しよう！";
const contentSubMessage =
  "アプリを起動するだけでOK！\n記録したデータは様々な形で確認することが可能です";
const firstContentText = "ダッシュボード";
const firstContentDescription = `タイピングの記録をグラフやリストで可視化。\nアプリケーションごとの入力数も確認できます。`;
const secondContentText = "ウィジェット";
const secondContentDescription = `通知センターから、タイピング数をチェックできます。`;
const thirdContentText = "メニュー";
const thirdContentDescription = `メニューバーからリアルタイムでタイピング数を見ることができます。`;

const mySiteUrl = "https://nhiroyasu.com";

onMounted(() => {
  ScrollReveal().reveal(".reveal", {
    duration: 1500,
    distance: "100px",
    opacity: 0,
    viewFactor: 1.0,
  });
});
</script>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";
@import "@/styles/color.scss";
@import "@/styles/classes.scss";
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");

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
    transition: all 0.1s ease-in-out;
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
    display: grid;
    grid-template-areas:
      "img description"
      "img name";
    column-gap: 16px;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 8px;

    img {
      grid-area: img;
      $icon-size: 96px;
      height: $icon-size;
      width: $icon-size;
    }

    #app-name {
      grid-area: name;
      color: $primary;
      font-size: 2em;
      font-weight: bold;
    }

    .app-short-description {
      grid-area: description;
      font-size: 0.9em;
      color: $primary;
    }
  }

  #app-message {
    font-size: 1.4em;
    font-weight: bold;
    white-space: pre-line;
  }

  #install-button {
    margin-bottom: 16px;

    @include if_md_greater {
      margin-top: 16px;
    }
    @include if_md_less {
      margin-top: 16px;
    }
  }
}

.app-version {
  font-size: 16px;
  font-weight: bold;
}

.app-support-os-version {
  font-size: 16px;
  font-weight: bold;
}

.description-group {
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
    margin-bottom: 24px;
  }

  .sub-title {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 64px;
    white-space: pre-line;
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
      font-weight: bold;
    }

    .feature-text {
      color: #ffffff;
      font-size: 1.5em;
      font-weight: bold;
    }

    .feature-description {
      color: #ffffff;
      font-size: 1.1rem;
      white-space: pre-line;
      margin-top: 16px;
    }

    .image1 {
      grid-area: feature1-image;
      width: 100%;
      @include if_md_greater {
        justify-self: center;
      }

      img {
        width: 100%;
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
        align-self: center;
        margin-top: 196px;
      }
      @include if_md_less {
        margin-top: 16px;
      }

      img {
        width: 100%;
      }
    }

    .text2 {
      grid-area: feature2-text;
      @include if_md_greater {
        align-self: center;
        justify-self: center;
        text-align: end;
        margin-top: 196px;
      }
      @include if_md_less {
        margin-top: 32px;
      }

      .app-support-version {
        margin-top: 16px;
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

.application-message {
  width: 100%;
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

    a {
      text-decoration: underline;
      color: #ffffff;
    }
  }
}
</style>
