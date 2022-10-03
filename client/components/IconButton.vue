<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: string;
    icon: string;
    ariaLabel: string;
    outlined?: boolean;
    to?: string;
  }>(),
  {
    size: "2xl",
    outlined: false,
  }
);
</script>

<template>
  <a
    v-if="to"
    class="icon-button"
    :class="{ outlined }"
    :aria-label="ariaLabel"
    target="_blank"
    :href="to"
  >
    <FontAwesomeIcon :icon="icon" :size="size" />
  </a>
  <button
    v-else
    class="icon-button"
    :class="{ outlined }"
    :aria-label="ariaLabel"
  >
    <FontAwesomeIcon :icon="icon" :size="size" />
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/shadow";
@use "../styles/colors";

.icon-button {
  display: grid;
  place-items: center;
  background: transparent;
  cursor: pointer;
  border: none;
  width: 3rem;
  height: 3rem;
  color: colors.$black;
  transition: 0.3s ease-in-out;
  transition-property: translate, box-shadow;

  &.outlined {
    border: 2px solid colors.$black;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    svg {
      scale: 0.82;
    }

    &:hover {
      @include shadow.shadow(colors.$black, md);
    }
  }

  &:hover {
    translate: 0 -0.2rem;
  }
}
</style>
