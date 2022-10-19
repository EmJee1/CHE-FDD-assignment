<script lang="ts" setup>
import { onDeactivated, ref } from "#imports";

const modalToggled = ref(false);

onDeactivated(() => {
  modalToggled.value = false;
});
</script>

<template>
  <div>
    <h1>Intro</h1>
    <button @click="modalToggled = true">Meer over intro</button>
    <Transition name="slide-top">
      <Modal v-if="modalToggled" title="My intro" @close="modalToggled = false">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facere
          necessitatibus saepe?
        </p>
      </Modal>
    </Transition>
  </div>
</template>
