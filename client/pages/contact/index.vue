<script lang="ts" setup>
import { useValidate } from "#imports";
import { linkedinUrl } from "~/utils/social-media";
import {
  createValidatorSequence,
  validateEmail,
  validateNotEmpty,
} from "~/utils/validators";

const {
  value: email,
  error: emailError,
  validate: valEmail,
} = useValidate(createValidatorSequence(validateNotEmpty, validateEmail));
const {
  value: name,
  error: nameErr,
  validate: valName,
} = useValidate(validateNotEmpty);
const {
  value: subject,
  error: subjectErr,
  validate: valSubject,
} = useValidate(validateNotEmpty);
const {
  value: body,
  error: bodyErr,
  validate: valBody,
} = useValidate(validateNotEmpty);

const onSubmit = (e: SubmitEvent) => {
  valEmail();
  valName();
  valSubject();
  valBody();

  if (emailError.value || nameErr.value || subjectErr.value || bodyErr.value) {
    return;
  }

  console.log("Form submitted with data:", {
    email: email.value,
    name: name.value,
    subject: subject.value,
  });
};
</script>

<template>
  <Slide>
    <h1>Contact</h1>
    <p>
      Dit is het einde, bedankt voor je interesse! Meer weten, vragen of wil je
      gewoon iets delen? Voeg me toe op
      <a :href="linkedinUrl" target="_blank">LinkedIn</a>, een ander medium of
      neem contact op via het formulier hieronder
    </p>
    <form @submit.prevent="onSubmit" class="form">
      <div class="form-row">
        <FormField
          v-model="email"
          type="email"
          id="email"
          label="Email"
          :error="emailError"
          @blur="valEmail"
        />
        <FormField
          v-model="name"
          id="name"
          label="Naam"
          :error="nameErr"
          @blur="valName"
        />
        <FormField
          v-model="subject"
          id="subject"
          label="Onderwerp"
          :error="subjectErr"
          @blur="valSubject"
        />
      </div>
      <FormField
        v-model="body"
        type="text"
        multiline
        id="body"
        label="Bericht"
        :error="bodyErr"
        @blur="valBody"
      />
      <button type="submit">Versturen</button>
    </form>
  </Slide>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";

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
