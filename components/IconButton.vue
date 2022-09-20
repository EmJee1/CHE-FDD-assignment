<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>

<template>
  <button class="icon-link">
    <font-awesome-icon :icon="icon" size="xl" />
  </button>
</template>

<style scoped>
.icon-link {
  display: grid;
  place-items: center;
  background-color: lightgray;
  border: 2px solid darkgray;
  width: 3rem;
  height: 3rem;
}
</style>
