<script lang="ts" setup></script>

<template>
  <Slide>
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
  </Slide>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/spacing";
@use "../styles/colors";
@use "../styles/misc";

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
    @include spacing.content-block-margin(margin-top);
  }

  &-text {
    @include spacing.content-block-item-margin(margin-top);

    &:last-of-type {
      @include spacing.content-block-margin(margin-bottom);
    }
  }

  @include breakpoints.md {
    text-align: center;
  }
}
</style>
