<script lang="ts" setup>
defineProps<{
  type: "text" | "email";
  modelValue: string;
  label: string;
  id: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string);
}>();

const onInput = (e: InputEvent) => {
  // Casting here is fine since we know for sure that the value is from an input element
  const value = (e.target as HTMLInputElement).value.trim();
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="field">
    <label class="label" :for="id">{{ label }}</label>
    <input
      class="input"
      required
      :type="type"
      :id="id"
      :value="modelValue"
      @input="onInput"
    />
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
</style>
