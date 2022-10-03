<script lang="ts" setup>
import { ref } from "#imports";

const modalToggled = ref(false);
</script>

<template>
  <Slide>
    <h1>Intro</h1>
    <button @click="modalToggled = true">Meer over intro</button>
    <Modal v-if="modalToggled" title="My intro" @close="modalToggled = false">
      <h4>My body Lorem ipsum.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facere
        necessitatibus saepe?
      </p>
    </Modal>
  </Slide>
</template>
