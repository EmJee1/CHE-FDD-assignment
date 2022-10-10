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

.toast {
  display: flex;
  align-items: center;
  width: fit-content;
  border: 2px solid colors.$purple;
  border-radius: misc.$border-radius;
  background: transparentize(colors.$purple, 0.8);
  padding: 0.6rem 0.6rem 0.6rem 0.8rem;
  gap: 0.6rem;

  &-icon {
    height: 2rem;
    color: colors.$white;
  }

  &-body {
    max-width: 200px;
    color: colors.$black;
    font-size: 0.8em;
  }
}
</style>
