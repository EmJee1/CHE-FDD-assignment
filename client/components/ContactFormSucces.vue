<script lang="ts" setup>
defineEmits<{
  (e: "refillForm");
}>();
</script>

<template>
  <div class="form-success">
    <div class="check">
      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
    </div>
    <div class="form-description">
      <p>Bedankt voor het invullen</p>
      <p>Ik neem zo spoedig mogelijk contact met u op.</p>
      <p>
        Iets vergeten?
        <button class="refill-form" @click="$emit('refillForm')">
          Vul het formulier opnieuw in</button
        >.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/spacing";
@use "../styles/colors";

.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-description {
  text-align: center;

  .refill-form {
    color: colors.$purple;
    text-decoration: underline;
    background: transparent;
    border: none;
    padding: 6px 0;
    cursor: pointer;
    font-size: 16px;
  }
}

.check {
  color: colors.$purple;
  @include spacing.content-block-item-margin(margin-bottom);
  width: 2rem;
  height: 2rem;

  > svg {
    width: 100%;
    height: 100%;
  }
}
</style>
