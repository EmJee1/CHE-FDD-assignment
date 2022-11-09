<script lang="ts" setup>
import { ref, useToast, useValidate } from "#imports";
import { Toast } from "~/composables/use-toast";
import {
  createValidatorSequence,
  validateEmail,
  validateNotEmpty,
} from "~/utils/validators";

const emit = defineEmits<{
  (e: "success"): void;
}>();

const contactUrl =
  "https://us-central1-che-fdd-assignment.cloudfunctions.net/contact";
// "http://localhost:5001/che-fdd-assignment/us-central1/contact";

let toastInstance: Toast;
const loading = ref(false);
const { showToast } = useToast();

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
  toastInstance?.destroy();

  valEmail();
  valName();
  valSubject();
  valBody();

  if (emailError.value || nameErr.value || subjectErr.value || bodyErr.value) {
    return;
  }

  loading.value = true;

  try {
    const res = await fetch(contactUrl, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        name: name.value,
        subject: subject.value,
        body: body.value,
      }),
    });

    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    emit("success");
  } catch (err) {
    toastInstance = showToast({
      icon: "fa-solid fa-bug",
      title: "Oeps!",
      body: "Er is iets fout gegaan, probeer het later opnieuw of stuur een mail naar mart-janroeleveld@outlook.com",
      ms: 1000 * 60, // One minute
      variant: "error",
    });
  }

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
    <PrimaryButton submit shadow :loading="loading">Versturen</PrimaryButton>
  </form>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/spacing";

.form {
  display: flex;
  flex-direction: column;
  @include spacing.content-block-item-margin(gap);
}

.form-row {
  display: flex;
  flex-direction: column;
  @include spacing.content-block-item-margin(gap);

  @include breakpoints.md {
    flex-direction: row;
  }
}
</style>
