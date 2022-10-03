<script lang="ts" setup>
import { linkedinUrl } from "~/utils/social-media";
import ContactForm from "~/components/ContactForm.vue";
</script>

<template>
  <Slide>
    <div class="header">
      <h1>Contact</h1>
      <p>
        Dit is het einde, bedankt voor je interesse! Meer weten, vragen of wil
        je gewoon iets delen? Voeg me toe op
        <ExternalLink :to="linkedinUrl">LinkedIn</ExternalLink>, een ander
        medium of neem contact op via het formulier hieronder
      </p>
    </div>
    <ContactForm />
  </Slide>
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
}

.header,
.form {
  @include spacing.content-block-margin(bottom);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;

  @include breakpoints.md {
    gap: 18px;
  }
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 14px;

  @include breakpoints.md {
    flex-direction: row;
  }

  @include breakpoints.xl {
    gap: 30px;
  }
}
</style>
