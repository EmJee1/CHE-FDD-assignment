<script lang="ts" setup>
import portraitImage from "../assets/mart-jan-transparent.png";
import { onActivated, useToast } from "#imports";

const { showToast } = useToast();

onActivated(() => {
  showToast({
    ms: 1000 * 6, // 6 seconds
    icon: "fa-solid fa-lightbulb",
    title: "Tip:",
    body: "Gebruik pijltjestoetsen om tussen pagina’s te navigeren",
    variant: "primary",
  });
});
</script>

<template>
  <div>
    <div class="header-top">
      <img class="header-top-image" :src="portraitImage" alt="" />
    </div>
    <div class="header">
      <h1 class="header-title">Welkom</h1>
      <p class="header-text">
        Ik ben een Nederlandse webdeveloper, die zich specialiseert in back-end
        ontwikkeling. Ik sta altijd open voor het leren van nieuwe
        technologieën, en houd van vernieuwing. Mijn kwaliteiten variëren van
        front-end tools tot databases en mobiel-development.
      </p>
      <p class="header-text">
        Ik wil jullie graag meenemen in een verhaal over de tot-standkoming van
        deze website
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/spacing";
@use "../styles/colors";
@use "../styles/misc";

.header-top {
  display: flex;
  justify-content: center;

  &-image {
    width: 250px;
  }
}

.header {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  background: colors.$purple;
  border-radius: 0 0 misc.$border-radius misc.$border-radius;

  &-title,
  &-text {
    margin: 0 auto;
    padding: 0 0.6rem;
    color: colors.$white;

    @include breakpoints.md {
      padding: 0;
      max-width: 80%;
    }
  }

  &-title {
    @include spacing.content-block-margin(padding-top);
  }

  &-text {
    font-weight: 300;

    @include spacing.content-block-item-margin(padding-top);

    &:last-of-type {
      @include spacing.content-block-margin(padding-bottom);
    }
  }

  @include breakpoints.md {
    text-align: center;
  }
}
</style>
