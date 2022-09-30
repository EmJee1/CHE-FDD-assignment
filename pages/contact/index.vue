<script lang="ts" setup>
import { ref } from "#imports";

const email = ref("");
const name = ref("");
const subject = ref("");

const onSubmit = (e: SubmitEvent) => {
  // TODO: do something with the data
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
    <form @submit.prevent="onSubmit">
      <div class="form-row">
        <FormField type="email" id="email" label="Email" v-model="email" />
        <FormField type="text" id="name" label="Naam" v-model="name" />
        <FormField
          type="text"
          id="subject"
          label="Onderwerp"
          v-model="subject"
        />
      </div>
      <button type="submit">Versturen</button>
    </form>
  </Slide>
</template>

<style lang="scss" scoped>
@use "../styles/breakpoints";

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
