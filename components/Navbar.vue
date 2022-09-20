<script lang="ts" setup>
import { useSlide } from "#imports";

const { slides, selectedSlide } = useSlide();
</script>

<template>
  <nav class="navbar">
    <NuxtLink
      v-for="slide in slides"
      class="navbar-link"
      :class="{ active: slide.path === selectedSlide.path }"
      :to="slide.path"
    >
      {{ slide.name }}
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  position: sticky;
  justify-content: center;
  text-transform: capitalize;
  top: 0;
}

.navbar-link {
  $link-padding-x: 0.8rem;

  position: relative;
  text-decoration: none;
  padding: 0.4rem $link-padding-x;
  color: black;
  font-size: 1.2rem;

  &::after {
    position: absolute;
    left: $link-padding-x;
    height: 4px;
    width: 0;
    bottom: 0;
    content: "";
    transition: width 0.3s ease-in-out;
    background: #7510f7;
  }

  &:hover::after {
    width: calc(100% - #{$link-padding-x * 2});
  }
}
</style>
