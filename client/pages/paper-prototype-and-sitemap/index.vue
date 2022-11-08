<script lang="ts" setup>
import { ref } from "#imports";
import sitemapImage from "../../assets/sitemap.png";
import paperPrototypeOne from "../../assets/paper-prototype-content.jpg";

const sitemapModalToggled = ref(false);
const paperPrototypeToggled = ref(false);
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
    <button class="content" @click="paperPrototypeToggled = true">
      Meer over Paper Prototype
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
          hoe je je content gaat structureren. Deze specifieke sitemap is wat
          anders dan gebruikelijk, omdat er geen 'nesting' wordt toegepast. Dat
          komt omdat deze website bestaat uit een soort slides zoals je vast al
          hebt gemerkt.
        </p>
        <p class="content">
          Als je goed oplet is de huidige website niet hetzelfde als de sitemap.
          Dit komt omdat in de verdere design-fase een keuze wordt gemaakt
          waardoor een andere structuur logischer is.
        </p>
        <p class="content">
          Ik vond het een goede oefening om alvast na te denken op welke manier
          ik mijn content ga structureren. In komende web-projecten ga ik het
          ook zeker vaker toepassen omdat het me heeft geholpen in het verdere
          design.
        </p>
        <ExternalLink to="/sitemap.png">Download sitemap</ExternalLink>
      </Modal>
    </Transition>

    <Transition name="slide-top">
      <Modal
        v-if="paperPrototypeToggled"
        title="Sitemap"
        @close="paperPrototypeToggled = false"
      >
        <img
          class="content"
          :src="paperPrototypeOne"
          alt="paper prototype content pagina"
        />
        <p class="content">
          Een paper prototype is precies wat het klinkt. Je tekent een schets
          van een pagina en haar componenten. Door te tekenen op papier kun je
          heel snel itereren. Het geeft een basis om verder uitgewerkte
          wireframes te maken.
        </p>
        <p class="content">
          Dit was nieuw voor mij, maar een heel goede ervaring. Ik ben zeker van
          plan deze techniek vaker in te gaan zetten. Het nadeel is dat het
          lastig is te testen door gebruikers, omdat het nog vrij veel
          inlevingsvermogen kost. Echter is dit wel direct een mooi punt om
          meerdere stakeholders, designers, developers etc. uit te nodigen om
          mee te denken, omdat er geen kennis van specifieke tools of principes
          nodig is.
        </p>
        <ExternalLink to="/paper-prototype.pdf">
          Download Paper Prototype
        </ExternalLink>
      </Modal>
    </Transition>
  </div>
</template>
