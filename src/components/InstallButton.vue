<template>
  <a
    :href="downloadLink"
    target="_blank"
    rel="noopener noreferrer"
    class="install-button"
    @click="didTapDownloadLink"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#1eb5a4"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        id="downalod-icon-path"
        d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
        style="stroke-dashoffset: 10px"
      />
    </svg>
    <div>{{ buttonTitle }}</div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";

export default defineComponent({
  name: "InstallButton",
  components: {},
  data() {
    return {
      downloadLink:
        "https://firebasestorage.googleapis.com/v0/b/typerunner.appspot.com/o/distribution%2FTypeRunnerInstaller%201.1.0.dmg?alt=media&token=6f8ca70f-fa0c-4774-8b04-40a911d1792d",
      buttonTitle: "最新版ダウンロード",
    };
  },
  methods: {
    didTapDownloadLink() {
      let analytics = getAnalytics();
      logEvent(analytics, "didTapDownloadLink", {
        date: Date.now(),
      });
    },
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

  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}
</style>
