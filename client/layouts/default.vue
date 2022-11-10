<script lang="ts" setup>
import "../styles/global.scss";
import "../styles/transitions.scss";
import {
  watch,
  useRoute,
  useRouter,
  useSlide,
  useToast,
  onMounted,
  onUnmounted,
  useHead,
} from "#imports";
import wavesVector from "../assets/waves.svg";

const route = useRoute();
const router = useRouter();
const { toasts } = useToast();
const { selectedSlide, navigateToSlide, navigateRespective } = useSlide();
useHead({
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-LNQ0S2MRML",
    },
    {
      children:
        "window.dataLayer = window.dataLayer || []; function\n" +
        "    gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',\n" +
        "    'G-LNQ0S2MRML');",
    },
  ],
});

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

let lastNavigation = Date.now();
const onKeyDown = (e: KeyboardEvent) => {
  // Do not navigate on key-down if input field is in focus
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    return;
  }

  // If last navigation occurred less that 250ms ago, do not navigate to prevent DOM-exceptions
  if (Date.now() - lastNavigation < 250) {
    return;
  }

  lastNavigation = Date.now();

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
    <Slide>
      <div class="toasts">
        <TransitionGroup name="slide-top">
          <Toast
            v-for="toast in toasts"
            :key="toast.id"
            :title="toast.title"
            :icon="toast.icon"
            :variant="toast.variant"
          >
            {{ toast.body }}
          </Toast>
        </TransitionGroup>
      </div>
      <slot />
    </Slide>
    <!-- Navbar located after the slide (page) so it is stacked on top of it (without z-index needed) -->
    <Navbar />
  </div>
</template>

<style lang="scss" scoped>
.waves {
  position: absolute;
  max-height: 100px;
  width: 100%;
}

.toasts {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2rem;
  width: 100%;
  gap: 0.6rem;
}
</style>
