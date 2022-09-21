<script lang="ts" setup>
import "../styles/global.scss";
import { onMounted, watch, useRoute, useRouter, useSlide } from "#imports";

const route = useRoute();
const router = useRouter();
const { selectedSlide, navigateToSlide, navigateRespective } = useSlide();

onMounted(() => navigateToSlide(route.path));
watch(() => route.path, navigateToSlide, { immediate: true });
watch(
  () => selectedSlide.value,
  (curr) => router.push(curr.path),
  { deep: true }
);
</script>

<template>
  <div>
    <slot />
    <div class="buttons">
      <IconButton
        aria-label="previous slide"
        icon="fa-solid fa-chevron-left"
        @click="navigateRespective(-1)"
      />
      <IconButton
        aria-label="next slide"
        icon="fa-solid fa-chevron-right"
        @click="navigateRespective(1)"
      />
    </div>
    <Navbar />
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
}
</style>
