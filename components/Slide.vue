<template>
  <div class="slide">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.slide {
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
}
</style>
