<script lang="ts" setup></script>

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
  </div>
</template>
