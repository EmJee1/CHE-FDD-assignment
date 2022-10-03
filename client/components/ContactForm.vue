<script lang="ts" setup>
import { ref, useValidate } from "#imports";
import {
  createValidatorSequence,
  validateEmail,
  validateNotEmpty,
} from "~/utils/validators";

const contactUrl =
  "https://us-central1-che-fdd-assignment.cloudfunctions.net/contact";
// "http://localhost:5001/che-fdd-assignment/us-central1/contact";

const loading = ref(false);

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

const onSubmit = async (e: SubmitEvent) => {
  valEmail();
  valName();
  valSubject();
  valBody();

  if (emailError.value || nameErr.value || subjectErr.value || bodyErr.value) {
    return;
  }

  loading.value = true;
  const res = await fetch(contactUrl, {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      name: name.value,
      subject: subject.value,
      body: body.value,
    }),
  });
  loading.value = false;
};
</script>

<template>
  <!-- TODO: secure form submissions with recaptcha -->
  <!-- https://developers.google.com/recaptcha/docs/v3 -->
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
      multiline
      id="body"
      label="Bericht"
      :error="bodyErr"
      @blur="valBody"
    />
    <PrimaryButton submit :loading="loading">Versturen</PrimaryButton>
  </form>
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
