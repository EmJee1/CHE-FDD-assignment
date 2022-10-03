<script lang="ts" setup></script>

<template>
  <div class="slide">
    <slot />
    <SlideControls />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";

/** Container setup based on bootstrap containers
* https://getbootstrap.com/docs/5.0/layout/containers/
* Extra small   Small  Medium   Large   X-Large
*      <576px  ≥576px  ≥768px  ≥992px   ≥1200px
*        100%   540px   720px   960px 	  1140px
*/

.slide {
  /* Add vertical spacing on mobile */
  width: calc(100vw - 20px);
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  inset: 0;

  @include breakpoints.sm {
    width: 100%;
    max-width: 540px;
  }

  @include breakpoints.md {
    max-width: 720px;
  }

  @include breakpoints.lg {
    max-width: 960px;
  }

  @include breakpoints.xl {
    max-width: 1140px;
  }
}
</style>
