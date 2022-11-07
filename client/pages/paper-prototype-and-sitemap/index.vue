<script lang="ts" setup>
import { ref } from "#imports";
import sitemapImage from "../../assets/sitemap.png";

const sitemapModalToggled = ref(false);
</script>

<template>
  <div class="content-page">
    <h1 class="title">Paper Prototype & Sitemap</h1>
    <p class="content">
      Voordat je begint met het maken van een gelikt design is het goed om na te
      denken over een globale pagina-structuur (ook wel wireframes) en een
      overzicht van de te maken pagina's.
    </p>
    <button class="content" @click="sitemapModalToggled = true">
      Meer over Sitemap
    </button>

    <Transition name="slide-top">
      <Modal
        v-if="sitemapModalToggled"
        title="Sitemap"
        @close="sitemapModalToggled = false"
      >
        <img class="content" :src="sitemapImage" alt="sitemap" />
        <p class="content">
          Een sitemap wordt gebruikt om te visualiseren uit welke pagina's een
          website bestaat. Het kan ook een goede manier zijn om je te forceren
          hoe je je content gaat structureren.
        </p>
        <p class="content">
          Deze specifieke sitemap is wat anders dan gebruikelijk, omdat er geen
          'nesting' wordt toegepast. Dat komt omdat deze website bestaat uit een
          soort slides zoals je vast al hebt gemerkt.
        </p>
        <p class="content">
          Als je goed oplet is de huidige website niet hetzelfde als de sitemap.
          Dit komt omdat in de verdere design-fase een keuze wordt gemaakt
          waardoor een andere structuur logischer is.
        </p>
      </Modal>
    </Transition>
  </div>
</template>
