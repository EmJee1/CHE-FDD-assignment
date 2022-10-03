<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>

<template>
  <a class="link" target="_blank" :href="to">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
@use "../styles/colors";

.link {
  color: colors.$purple;
  text-decoration: underline;
}
</style>
