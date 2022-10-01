<script lang="ts" setup>
defineProps<{
  type: "text" | "email";
  modelValue: string;
  label: string;
  id: string;
  error?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string);
  (e: "blur");
}>();

const onInput = (e: InputEvent) => {
  // Casting here is fine since we know for sure that the value is from an input element
  const value = (e.target as HTMLInputElement).value.trim();
  emit("update:modelValue", value);
};

const onBlur = () => emit("blur");
</script>

<template>
  <div class="field" :class="{ 'field-error': error }">
    <label class="label" :for="id">{{ label }}</label>
    <input
      class="input"
      formnovalidate
      :type="type"
      :id="id"
      :value="modelValue"
      @input="onInput"
      @blur="onBlur"
    />
    <div v-if="error" class="error">
      <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
      {{ error }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/colors";
@use "../styles/misc";

$elements-padding: 8px;

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  &-error .input {
    border-color: colors.$red;
  }
}

.label {
  font-weight: 600;
}

.input {
  width: 100%;
  padding: 12px;
  border: 2px solid colors.$black;
  background: colors.$white;
  border-radius: misc.$border-radius;
  outline-color: colors.$purple;
}

.error {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  color: colors.$red;
  font-weight: 600;
}
</style>
