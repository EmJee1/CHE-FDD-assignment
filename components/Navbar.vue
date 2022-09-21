<script lang="ts" setup>
import { ref, useSlide } from "#imports";

const { slides, selectedSlide } = useSlide();

const expanded = ref(false);

const onClickOutside = () => {
  expanded.value = false;
};

const onToggleNavbar = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <nav
    class="navbar"
    id="navbar"
    :class="{ expanded }"
    v-click-outside="onClickOutside"
  >
    <NuxtLink
      v-for="slide in slides"
      class="navbar-link"
      :class="{ active: slide.path === selectedSlide.path }"
      :to="slide.path"
    >
      {{ slide.name }}
    </NuxtLink>
    <button
      :aria-expanded="expanded"
      :aria-haspopup="true"
      aria-controls="navbar"
      class="navbar-expander"
      @click="onToggleNavbar"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@use "../styles/colors";

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
  position: sticky;
  max-width: 300px;
  text-transform: capitalize;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 transparentize(colors.$black, 0.8);
  backdrop-filter: blur(8px);

  &.expanded {
    transform: translateX(0);
  }
}

.navbar-link {
  $link-padding-x: 0.8rem;

  width: fit-content;
  position: relative;
  text-decoration: none;
  padding: 0.4rem $link-padding-x;
  font-size: 1.2rem;

  &::after {
    position: absolute;
    left: $link-padding-x;
    height: 4px;
    width: 0;
    bottom: 0;
    content: "";
    transition: width 0.3s ease-in-out;
    background: colors.$purple;
  }

  &:hover::after,
  &.active::after {
    width: calc(100% - #{$link-padding-x * 2});
  }
}

.navbar-expander {
  $button-width: 1.8rem;

  position: absolute;
  display: grid;
  place-items: center;
  height: 4rem;
  top: 50%;
  transform: translateY(-50%);
  right: -$button-width;
  background: transparent;
  width: $button-width;
  cursor: pointer;
  border: 1px solid colors.$black;
  border-radius: 0 8px 8px 0;
  border-left: none;
  transition: 0.3s ease-in-out;
  transition-property: color, background-color;

  &:hover {
    color: colors.$white;
    background: colors.$black;
  }
}
</style>
