<script lang="ts" setup>
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <div class="toast">
    <div>
      <FontAwesomeIcon class="toast-icon" :icon="icon" />
    </div>
    <div class="toast-body">
      <strong>{{ title }}</strong>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/misc";
@use "../styles/colors";
@use "../styles/shadow";
@use "../styles/spacing";
@use "../styles/breakpoints";

.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  width: 100%;
  border: 2px solid colors.$purple;
  border-radius: misc.$border-radius;
  background: #e5d0fe; /* transparentize(colors.$purple, 0.8) on a white background */
  padding: 0.6rem 0.6rem 0.6rem 0.8rem;
  gap: 0.6rem;

  &-icon {
    height: 2rem;
    color: colors.$white;

    @include breakpoints.md {
      height: 1.2rem;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: colors.$black;
    font-size: 0.8em;

    @include breakpoints.md {
      gap: 6px;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
