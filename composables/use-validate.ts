import { ref } from "#imports";
import { Validator } from "~/utils/validators";

const useValidate = (validator: Validator) => {
  const value = ref("");
  const error = ref<string>();

  const validate = () => {
    error.value = validator(value.value);
  };

  return {
    value,
    error,
    validate,
  };
};

export default useValidate;
