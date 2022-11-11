<script lang="ts" setup>
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{
  to: string;
  external?: boolean;
  publicDir?: boolean;
}>();

const runtimeConfig = useRuntimeConfig();
const href = computed(() =>
  props.publicDir ? `${runtimeConfig.publicDir}${props.to}` : props.to
);
</script>

<template>
  <a v-if="external" class="link" target="_blank" :href="href">
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
