<script lang="ts" setup>
import { computed } from "#imports";

const props = withDefaults(
  defineProps<{
    submit?: boolean;
    loading?: boolean;
  }>(),
  {
    submit: true,
    loading: false,
  }
);

const type = computed(() => (props.submit ? "submit" : "button"));
</script>

<template>
  <button class="button" :class="{ loading }" :type="type">
    <FontAwesomeIcon class="loader" icon="fa-solid fa-circle-notch" />
    <span class="button-content">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/colors";
@use "../styles/misc";

.button {
  position: relative;
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

  .loader {
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    animation: rotate 2s linear infinite;
  }

  &.loading .loader {
    visibility: visible;
  }

  &.loading .button-content {
    visibility: hidden;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
