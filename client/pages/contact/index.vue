<script lang="ts" setup>
import { linkedinUrl } from "~/utils/social-media";
import ContactForm from "~/components/ContactForm.vue";
</script>

<template>
  <div>
    <div class="header">
      <h1 class="header-title">Contact</h1>
      <p class="header-text">
        Dit is het einde, bedankt voor je interesse! Meer weten, vragen of wil
        je gewoon iets delen? Voeg me toe op
        <ExternalLink :to="linkedinUrl">LinkedIn</ExternalLink>, een ander
        medium of neem contact op via het formulier hieronder
      </p>
    </div>
    <ContactForm class="form" />
    <SocialLinks />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/spacing";

.header {
  max-width: 450px;
  margin: 0 auto;

  @include breakpoints.md {
    text-align: center;
  }

  &-title {
    margin: 0;
    @include spacing.content-block-item-margin(margin-bottom);
  }

  &-text {
    margin: 0;
  }
}

.header,
.form {
  @include spacing.content-block-margin(margin-bottom);
}
</style>
