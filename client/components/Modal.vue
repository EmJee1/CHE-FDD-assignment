<script lang="ts" setup>
import { onMounted, onUnmounted } from "#imports";

const emit = defineEmits<{
  (e: "close"): void;
}>();

defineProps<{
  title: string;
}>();

onMounted(() => window.addEventListener("keydown", onKeyDown));
onUnmounted(() => window.removeEventListener("keydown", onKeyDown));

const onKeyDown = (e: KeyboardEvent) => {
  e.code === "Escape" && onClose();
};

const onClose = () => emit("close");
</script>

<template>
  <div class="modal">
    <div class="modal-backdrop" />
    <div class="modal-content" v-click-outside="onClose">
      <div class="modal-head">
        <h2>{{ title }}</h2>
        <IconButton
          icon="fa-solid fa-close"
          aria-label="close"
          size="xl"
          @click="onClose"
        />
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/colors";
@use "../styles/misc";
@use "../styles/breakpoints";
@use "../styles/spacing";

.modal-backdrop {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100vw;
  height: 100vh;
}

.modal {
  display: grid;
  place-items: center;
  max-width: 800px;
  margin: 0 auto;
  position: absolute;
  inset: 0;

  &-content {
    background: colors.$white;
    position: relative;
    padding: 0.4rem 0.8rem;
    margin: 0 0.2rem;
    border-radius: misc.$border-radius;
    max-height: 85vh;
    overflow-y: scroll;
    width: 95%;
    z-index: 2;

    :deep(*) {
      max-width: 100%;
    }

    @include breakpoints.md {
      padding: 1rem 1.6rem;
      width: 100%;
    }
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-body {
    @include spacing.content-block-item-margin(padding-top);
  }
}
</style>
