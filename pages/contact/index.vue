<script lang="ts" setup>
import { ref } from "#imports";

const email = ref("");
const subject = ref("");

const onSubmit = (e: SubmitEvent) => {
  // TODO: do something with the data
  console.log("Form submitted with data:", {
    email: email.value,
    subject: subject.value,
  });
};
</script>

<template>
  <Slide>
    <h1>Contact</h1>
    <form @submit.prevent="onSubmit">
      <FormField type="email" id="email" label="Email" v-model="email" />
      <FormField type="text" id="subject" label="Onderwerp" v-model="subject" />
      <button type="submit">Versturen</button>
    </form>
  </Slide>
</template>
