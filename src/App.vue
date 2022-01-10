<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

export default defineComponent({
  data: function () {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    createTitleDesc: function (
      routeInstance: RouteLocationNormalizedLoaded
    ): void {
      // タイトルを設定
      if (routeInstance.meta.title) {
        var setTitle = routeInstance.meta.title;
        document.title = setTitle + "";
      } else {
        document.title = "title is not set";
      }

      // メタタグdescription設定
      if (routeInstance.meta.desc) {
        var setDesc = routeInstance.meta.desc + "";
        const meta = document.querySelector("meta[name='description']");
        if (meta != null) {
          meta.setAttribute("content", setDesc);
        }
      } else {
        const meta = document.querySelector("meta[name='description']");
        if (meta != null) {
          meta.setAttribute("content", "description is not set");
        }
      }
    },
  },
  mounted: function (): void {
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance);
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

#app {
  font-family: "Noto Sans JP", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
