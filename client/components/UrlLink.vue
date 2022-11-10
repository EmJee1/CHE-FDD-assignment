<script lang="ts" setup>
defineProps<{
  to: string;
  external?: boolean;
}>();
</script>

<template>
  <a v-if="external" class="link" target="_blank" :href="to">
    <slot />
  </a>
  <NuxtLink class="link" :to="to" v-else>
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "../styles/colors";

.link {
  color: colors.$purple;
  text-decoration: underline;
}
</style>
