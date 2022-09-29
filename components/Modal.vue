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

.modal {
  display: grid;
  place-items: center;
  max-width: 800px;
  margin: 0 auto;

  &-backdrop {
    background: transparentize(colors.$black, 0.4);
    position: absolute;
    inset: 0;
    z-index: 2;
  }

  &-content {
    background: colors.$white;
    position: relative;
    padding: 1rem 1.6rem;
    border-radius: misc.$border-radius;
    width: 100%;
    z-index: 2;
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
