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
      blijven maken.
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
            <strong>Voortzetting:</strong> bij bijvoorbeeld stippellijntjes.
          </li>
        </ol>
      </Modal>
    </Transition>
  </div>
</template>
