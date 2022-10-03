<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    submit?: boolean;
  }>(),
  {
    submit: true,
  }
);
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/colors";
@use "../styles/misc";

.button {
  width: fit-content;
  cursor: pointer;
  padding: 10px 30px;
  color: colors.$white;
  background: colors.$purple;
  border: 1px solid colors.$purple;
  box-shadow: misc.$shadow-purple;
  border-radius: misc.$border-radius;
  transition: translate 0.3s ease-in-out;

  &:hover {
    translate: 0 -0.2rem;
  }
}
</style>
