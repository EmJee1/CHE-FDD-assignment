<script lang="ts" setup>
import { ref } from "#imports";
import gestaltPrinciples from "~/assets/gestalt-principles.png";

const designPrinciplesToggled = ref(false);
</script>

<template>
  <div class="content-page">
    <h1 class="title">Design</h1>
    <p class="content">
      Nu al het voorwerk gemaakt is, kunnen we een design gaan maken. Mijn
      gekozen design-software is Figma omdat ik daar het meest in thuis ben. Ik
      ben begonnen met uitzoeken van kleuren en een font. Daarna ben ik het
      medium fidelity wireframe na gaan maken met veel meer detail en kleur. Het
      design heeft mij geholpen om de website goed en snel te kunnen
      ontwikkelen. Het is over het algemeen veel sneller om een design aan te
      passen dan een website. In komende projecten zal ik ook zeker designs
      blijven maken. Het gemaakte Figma-document is in te zien via
      <UrlLink
        external
        to="https://www.figma.com/file/2BVrpjljMfNUsaEuTBbsLU/CHE-FDD?node-id=0%3A1&t=2UljEFZTDQxeEevr-1"
        class="content"
        >deze link</UrlLink
      >.
    </p>

    <PrimaryButton
      class="content"
      icon="fa-solid fa-user-shield"
      @click="designPrinciplesToggled = true"
    >
      Verdieping designprincipes
    </PrimaryButton>

    <Transition name="slide-top">
      <Modal
        v-if="designPrinciplesToggled"
        title="Sitemap"
        @close="designPrinciplesToggled = false"
      >
        <img class="content" :src="gestaltPrinciples" alt="gestalt principes" />
        <p class="content">
          Vaak kan het helpen om bij het maken van een design, bepaalde
          designprincipes aan te houden. Een bekend voorbeeld in Gestalt.
          Gestalt dicteert een 7-tal principes, te weten:
        </p>
        <ol class="content">
          <li>
            <strong>Nabijheid:</strong> groepering zoals menu's, maar ook
            content in kopjes.
          </li>
          <li>
            <strong>Gelijkenis:</strong> door verschillende elementen dezelfde
            kleur, grootte of andere eigenschap te geven, laten zien dat het bij
            elkaar hoort.
          </li>
          <li>
            <strong>Sluiting:</strong> door stukjes weg te laten die mensen zelf
            in kunnen vullen. Bij bijvoorbeeld een halve circel kan je de rest
            erbij invullen.
          </li>
          <li>
            <strong>Voortzetting:</strong> bij bijvoorbeeld stippellijntjes zien
            mensen de bestemming.
          </li>
          <li>
            <strong>Omsluiting:</strong> door het gebruik van borders content
            als een groep weer te geven. Denk ook aan kolommen in een layout.
          </li>
          <li>
            <strong>Figuur / grond:</strong> de correlatie tussen voor- en
            achtergrond.
          </li>
          <li>
            <strong>Symmetrie:</strong> geeft rust bij de eindgebruiker omdat er
            weinig is wat afleid.
          </li>
        </ol>
        <p class="content">
          Ik heb zoveel mogelijk van deze principes proberen te verwerken in
          deze website. Zo zijn specifieke onderdelen van de website opgedeeld
          in pagina's, kopjes of modals (omsluiting). Heb ik bij een modal de
          achtergond heel onduidelijk gemaakt zodat de achtergrond zo min
          mogelijk afleidend is (figuur / grond). En Is de website heel
          herkenbaar en rustig door de veel hergebruikte UI-componenten
          (symmetrie).
        </p>
        <p class="content">
          Als je dit een interessant onderwerp vindt kan ik van harte aanraden
          om
          <UrlLink external to="https://airbnb.design/the-way-we-build/"
            >dit artikel</UrlLink
          >
          te lezen over designprincipes van Airbnb.
        </p>
      </Modal>
    </Transition>
  </div>
</template>
