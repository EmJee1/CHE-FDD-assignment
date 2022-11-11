<script lang="ts" setup>
import { ref } from "#imports";
import sitemapImage from "../../assets/sitemap.png";
import paperPrototypeOne from "../../assets/paper-prototype-content.jpg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import UrlLink from "~/components/UrlLink.vue";

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
    <div class="content modals">
      <PrimaryButton
        class="modals-button"
        icon="fa-solid fa-sitemap"
        @click="sitemapModalToggled = true"
      >
        Meer over Sitemap
      </PrimaryButton>
      <PrimaryButton
        class="modals-button"
        icon="fa-solid fa-note-sticky"
        @click="paperPrototypeToggled = true"
      >
        Meer over Paper Prototype
      </PrimaryButton>
    </div>

    <Transition name="slide-top">
      <Modal
        v-if="sitemapModalToggled"
        title="Sitemap"
        @close="sitemapModalToggled = false"
      >
        <img class="content" :src="sitemapImage" alt="sitemap" />
        <p class="content">
          Een sitemap wordt gebruikt om te visualiseren uit welke pagina's een
          website bestaat. Het is ook een goede manier om jezelf te dwingen je
          content op een logische manier te structureren. Deze specifieke
          sitemap is wat anders dan gebruikelijk, omdat er geen 'nesting' wordt
          toegepast. Dat komt omdat deze website bestaat uit een soort slides
          zoals je vast al hebt gemerkt.
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
        <UrlLink external public-dir to="sitemap.png">
          Download sitemap
        </UrlLink>
      </Modal>
    </Transition>

    <Transition name="slide-top">
      <Modal
        v-if="paperPrototypeToggled"
        title="Paper Prototype"
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
          Dit was nieuw voor mij, maar een heel goede ervaring. Ik ben van plan
          deze techniek vaker in te gaan zetten. Dit prototype heeft mij
          namelijk onder andere in staat gesteld om 2 verschillende varianten
          van de navigatiebalk te ontwerpen, zonder dat dit veel tijd kost.
          Nadat ik beide had gezien, wist ik dat ik een voorkeur heb voor de
          menubalk aan de linker zijkant. Het nadeel is dat het lastig is te
          testen door gebruikers, omdat het nog vrij veel inlevingsvermogen
          vergt. Een positief punt is dat dit een mooi moment is om meerdere
          stakeholders, designers, developers etc. uit te nodigen om mee te
          denken, omdat er geen kennis van specifieke tools of principes nodig
          is.
        </p>
        <UrlLink external public-dir to="paper-prototype.pdf">
          Download Paper Prototype
        </UrlLink>
      </Modal>
    </Transition>

    <h2 class="content">Moodboard</h2>
    <p class="content">
      Een moodboard is fijn om snel een representatie te maken van de stijl waar
      je voor gaat. Je kunt deze invullen met kleuren, foto's, kernwoorden en
      nog veel meer. Het gemaakte moodboard is
      <UrlLink external public-dir to="moodboard.png">hier</UrlLink> te
      bekijken.
    </p>
    <p class="content">
      Ik heb het gemaakt door plaatjes op te zoeken die me aanspreken. Daar
      vervolgens steekwoorden bij te bedenken en die proberen uit te stralen met
      de website. Het heeft mij geholpen om een duidelijker beeld te hebben van
      de uitstraling die ik van de site verwacht. Het heeft mij vooral geholpen
      bij het high-fidelity wireframe.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.modals {
  display: flex;
  gap: 1rem;

  &-button {
    height: fit-content;
  }
}
</style>
