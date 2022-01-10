<template>
  <a
    :href="downloadLink"
    target="_blank"
    rel="noopener noreferrer"
    class="install-button"
  >
    <img src="@/assets/save.svg" alt="#" />
    <div>ダウンロード</div>
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
        "https://firebasestorage.googleapis.com/v0/b/typerunner.appspot.com/o/distribution%2FTypeRunnerInstaller%201.0.0.dmg?alt=media&token=a5e4b7ef-e4ec-404a-a3f7-a89b5d25b10c",
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/responsive.scss";
@import "@/styles/color.scss";

.install-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #0f0f0f;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0px 32px;
  cursor: pointer;
  transition: all 0.3s linear;
  text-decoration: none;
  color: $primary;

  @include if_md_greater {
    margin-top: 48px;
  }
  @include if_md_less {
    margin-top: 16px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}
</style>
