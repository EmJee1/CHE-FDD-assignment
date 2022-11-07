<script lang="ts" setup>
import { ref } from "#imports";
import sitemapImage from "../../assets/sitemap.png";

const paperPrototypeModalToggled = ref(false);
</script>

<template>
  <div class="content-page">
    <h1 class="title">Paper Prototype & Sitemap</h1>
    <p class="content">
      Voordat je begint met het maken van een strak en gelikt design is het goed
      om na te denken over een globale pagina-structuur (ook wel wireframes) en
      pagina's.
    </p>
    <button @click="paperPrototypeModalToggled = true">
      Meer over paper prototypes
    </button>

    <Transition name="slide-top">
      <Modal
        v-if="paperPrototypeModalToggled"
        title="Paper Prototype"
        @close="paperPrototypeModalToggled = false"
      >
        <img :src="sitemapImage" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facere
          necessitatibus saepe?
        </p>
      </Modal>
    </Transition>
  </div>
</template>
