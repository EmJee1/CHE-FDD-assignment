<script lang="ts" setup>
import { computed } from "#imports";

const props = withDefaults(
  defineProps<{
    submit?: boolean;
    loading?: boolean;
    shadow?: boolean;
    icon?: string;
  }>(),
  {
    submit: false,
    loading: false,
    shadow: false,
  }
);

const type = computed(() => (props.submit ? "submit" : "button"));
</script>

<template>
  <button
    class="button"
    :class="{ loading, shadow, 'has-icon': icon }"
    :disabled="loading"
    :type="type"
  >
    <span>
      <FontAwesomeIcon v-if="icon" class="icon" :icon="icon" />
    </span>
    <span class="button-content">
      <slot />
    </span>
    <FontAwesomeIcon class="loader" icon="fa-solid fa-circle-notch" />
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/shadow";
@use "../styles/colors";
@use "../styles/misc";

.button {
  position: relative;
  width: fit-content;
  padding: 10px 30px;
  color: colors.$white;
  background: colors.$purple;
  border: 1px solid colors.$purple;
  border-radius: misc.$border-radius;
  transition: translate 0.3s ease-in-out;
  cursor: pointer;
  gap: 8px;
  display: flex;
  align-items: center;

  &:not(:disabled):hover {
    translate: 0 -0.2rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.shadow {
    @include shadow.shadow(colors.$purple);
  }

  &.has-icon {
    padding-left: 20px;
  }

  .loader {
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    animation: rotate 2s linear infinite;
  }

  &-content {
    text-align: right;
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
