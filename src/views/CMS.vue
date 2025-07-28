<template>
  <div class="cms-container">
    <div id="nc-root"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import CMS from "decap-cms-app";
import { cmsConfig } from "@/config/CmsConfig.js";

/**
 * 初始化 Decap CMS
 */
const initCMS = () => {
  CMS.init({
    config: cmsConfig,
  });
};

onMounted(() => {
  initCMS();
});
</script>

<style scoped>
.cms-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#nc-root {
  width: 100%;
  height: 100%;
}
</style>
