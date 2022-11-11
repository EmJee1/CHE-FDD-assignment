<script lang="ts" setup>
import { ref } from "#imports";
import w3cReport from "~/assets/w3c-report.png";
import lighthouseReport from "~/assets/lighthouse-report.png";

const extraToggled = ref(false);
</script>

<template>
  <div class="content-page">
    <h1 class="title">Deployment</h1>
    <p class="content">
      De deployment (oftewel het live zetten van de website) heb ik volledig
      geautomatiseerd door gebruik te maken van een CI/CD flow. Dit houd in dat
      er, elke keer dat er een nieuwe versie van de code beschikbaar is, een
      aantal stappen doorlopen worden. Deze stappen zijn als volgt:
    </p>
    <ol class="content">
      <li>
        De code van de website wordt verwerkt zodat het optimaal werkt voor
        zoveel mogelijk browsers
      </li>
      <li>
        Deze (gecompileerde) code wordt automatisch op Firebase hosting gezet
      </li>
      <li>Daarna wordt deze ook op de website-omgeving van school geplaatst</li>
      <li>
        De achterkant van de website wordt gecontroleerd op consistente code
        (linting)
      </li>
      <li>
        De achterkant van de website wordt getest op het juiste gebruik van
        datatypen (met TypeScript)
      </li>
    </ol>
    <p class="content">
      Ik heb er daarnaast ook voor gekozen om de code van deze website online te
      publiceren. Iedereen is dus van harte welkom om de code te bekijken,
      aanpassingen aan te vragen of me gewoon uit te lachen.
      <UrlLink external to="https://github.com/EmJee1/CHE-FDD-assignment"
        >Bekijk de code hier</UrlLink
      >.
    </p>
    <PrimaryButton
      icon="fa-solid fa-magnifying-glass-chart"
      @click="extraToggled = true"
    >
      Bekijk aanvullende controles
    </PrimaryButton>

    <Transition name="slide-top">
      <Modal v-if="extraToggled" title="Sitemap" @close="extraToggled = false">
        <img class="content" :src="w3cReport" alt="w3c result" />
        <p class="content">
          Om de geschreven website te controleren op correcte semantische code
          heb ik gebruik gemaakt van de W3C checker. Zoals te zien zijn er 4
          errors, ik zal ze hier alle 4 langs gaan.
        </p>
        <ul class="content">
          <li>
            <strong>Error 1:</strong> geeft een foutmelding dat een css
            variabele niet gebruikt mag worden als value voor transform. Het
            gaat om het onderstaande snippet css, en dat is wel gewoon valide,
            zoals ook de
            <UrlLink
              external
              to="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#basic_usage"
              >MDN documentatie</UrlLink
            >
            zegt.
            <pre>
.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle,none))
}</pre
            >
          </li>
          <li>
            <strong>Error 2 t/m 4:</strong> geeft aan dat translate als property
            niet bestaat, dat is ook foutief. Het is een wijd-ondersteunde, maar
            wel relatief nieuwe feature in css. Zie de
            <UrlLink
              external
              to="https://developer.mozilla.org/en-US/docs/Web/CSS/translate"
              >MDN documentatie</UrlLink
            >.
          </li>
          <li>
            <strong>Error 5:</strong> geeft aan dat een custom attribuut op het
            div element niet is toegestaan. Hier heb ik echter geen controle
            over omdat het framework wat ik gebruik (Nuxt) deze attribuut
            plaatst.
          </li>
        </ul>
        <img class="content" :src="lighthouseReport" alt="lighthouse report" />
        <p>
          Daarnaast heb ik een Lighthouse audit gedaan om snelheid,
          accessibility en SEO te meten. Zoals te zien scoort de website hoog.
          deze audit is gedaan op de Firebase Hosting instance, omdat de S3
          bucket zonder aanvullende configuratie geen gzip ondersteund.
        </p>
      </Modal>
    </Transition>
  </div>
</template>
