<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="title">Doelgroeponderzoek</h1>
    <p>
      Om een goede website te maken moet je eerst vaststellen wie je doelgroep
      is. Je moet erachter zien te komen wat die mensen van jouw website
      verwachten, zodat je duidelijk weet wat je uiteindelijk moet gaan
      ontwikkelen.
    </p>
    <p>De doelgroepen heb ik in 3 categorieën verdeeld.</p>
    <ol>
      <!-- TODO: nicer list component with group clarification only shown on expand -->
      <li>Om docenten om inzicht te geven in mijn kennis over het vak FDD.</li>
      <li>Om te laten zien wat ik doe aan familie en vrienden</li>
      <li>Aan overige geïnteresseerden zoals werkgevers</li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/spacing";

.title {
  @include spacing.content-block-margin(margin-bottom);
}

p {
  @include spacing.content-block-item-margin(margin-bottom);
}
</style>
