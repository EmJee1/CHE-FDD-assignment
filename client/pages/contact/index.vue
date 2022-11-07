<script lang="ts" setup>
import { linkedinUrl } from "~/utils/social-media";
import ContactForm from "~/components/ContactForm.vue";
import { ref } from "#imports";

enum FormState {
  Initial,
  Success,
}

const formState = ref(FormState.Initial);
</script>

<template>
  <div>
    <div class="header">
      <h1 class="header-title">Contact</h1>
      <p class="header-text" v-if="formState === FormState.Initial">
        Dit is het einde, bedankt voor je interesse! Meer weten, vragen of wil
        je gewoon iets delen? Voeg me toe op
        <ExternalLink :to="linkedinUrl">LinkedIn</ExternalLink>
        , een ander medium of neem contact op via het formulier hieronder
      </p>
    </div>
    <div class="form">
      <ContactForm
        v-if="formState === FormState.Initial"
        @success="formState = FormState.Success"
      />
      <ContactFormSucces
        v-else-if="formState === FormState.Success"
        @refill-form="formState = FormState.Initial"
      />
    </div>
    <SocialLinks />
  </div>
</template>
x
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
