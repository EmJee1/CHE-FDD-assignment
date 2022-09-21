<script lang="ts" setup>
defineProps<{
  icon: string;
  ariaLabel: string;
}>();
</script>

<template>
  <button class="icon-button" :aria-label="ariaLabel">
    <font-awesome-icon :icon="icon" size="2xl" />
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/colors";

.icon-button {
  display: grid;
  place-items: center;
  background: transparent;
  cursor: pointer;
  border: none;
  width: 3rem;
  height: 3rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.2rem);
  }
}
</style>
