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
  <label class="label" :for="id">{{ label }}</label>
  <input
    class="input"
    required
    :type="type"
    :id="id"
    :value="modelValue"
    @input="onInput"
  />
</template>
