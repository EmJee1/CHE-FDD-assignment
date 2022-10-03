<script lang="ts" setup>
import "../styles/global.scss";
import "../styles/transitions.scss";
import {
  watch,
  useRoute,
  useRouter,
  useSlide,
  onMounted,
  onUnmounted,
  useHead,
} from "#imports";
import wavesVector from "../assets/waves.svg";

const route = useRoute();
const router = useRouter();
const { selectedSlide, navigateToSlide, navigateRespective } = useSlide();

useHead({ title: "Mart-Jan" });

// 2-way binding of selected-slide variable and url path
watch(() => route.path, navigateToSlide, { immediate: true });
watch(
  () => selectedSlide.value,
  (curr) => router.push(curr.path),
  { deep: true }
);

onMounted(() => window.addEventListener("keydown", onKeyDown));
onUnmounted(() => window.removeEventListener("keydown", onKeyDown));

const onKeyDown = (e: KeyboardEvent) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    return;
  }

  if (e.code === "ArrowRight") {
    navigateRespective(1);
  } else if (e.code === "ArrowLeft") {
    navigateRespective(-1);
  }
};
</script>

<template>
  <div>
    <img class="waves" :src="wavesVector" alt="" />
    <slot />
    <!-- Buttons and Navbar located after the slide (page) so they are stacked on top of it (without z-index needed) -->
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

<style lang="scss" scoped>
.waves {
  position: absolute;
  max-height: 110px;
}

.buttons {
  display: flex;
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
}
</style>
