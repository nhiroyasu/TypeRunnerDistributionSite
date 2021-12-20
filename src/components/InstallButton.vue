<template>
  <a
    :href="donwloadLink"
    target="_blank"
    rel="noopener noreferrer"
    class="install-button"
  >
    <img src="@/assets/save.svg" alt="#" />
    <div>Install for macOS</div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InstallButton",
  components: {},
  data() {
    return {
      downloadLink:
        "https://firebasestorage.googleapis.com/v0/b/typerunner.appspot.com/o/distribution%2FTypeRunnerInstaller%20version1.0.0.dmg?alt=media&token=dc96004f-d57f-4db6-925d-55caeaf823b4",
      appName: "TypeRunner",
      message: "Let's count your typing.",
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";

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