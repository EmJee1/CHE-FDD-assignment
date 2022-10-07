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
    <Analytics />
    <img class="waves" :src="wavesVector" alt="" />
    <slot />
    <!-- Navbar located after the slide (page) so it is stacked on top of it (without z-index needed) -->
    <Navbar />
  </div>
</template>

<style lang="scss" scoped>
.waves {
  position: absolute;
  max-height: 110px;
}
</style>
