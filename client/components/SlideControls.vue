<script lang="ts" setup>
import { useSlide } from "#imports";

const { navigateRespective, isFirstSlide, isLastSlide } = useSlide();
</script>

<template>
  <div class="buttons">
    <IconButton
      aria-label="previous slide"
      icon="fa-solid fa-chevron-left"
      :disabled="isFirstSlide"
      @click="navigateRespective(-1)"
    />
    <IconButton
      aria-label="next slide"
      icon="fa-solid fa-chevron-right"
      :disabled="isLastSlide"
      @click="navigateRespective(1)"
    />
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
}
</style>
