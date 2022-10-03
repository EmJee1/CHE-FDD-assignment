import { validate as emailValidator } from "email-validator";

export type Validator = (value: string) => string | undefined;

export const validateNotEmpty: Validator = (value) => {
  if (!value.trim()) {
    return "Dit veld is verplicht";
  }
};

export const validateEmail: Validator = (value: string) => {
  if (!emailValidator(value)) {
    return "E-mailadres is niet correct";
  }
};

/**
 * @summary creates a new validator that consists of multiple validators, executed in order
 * @param validators all the validators to be used (order is respected)
 * @example
 * // If field is empty, gives error from not-empty validator
 * // If field is not a valid e-mail, gives error from email validator
 * // If field passes all validators, it returns undefined to indicate that the string is valid
 * createValidatorSequence(validateNotEmpty, validateEmail)
 */
export const createValidatorSequence = (
  ...validators: Validator[]
): Validator => {
  return (value: string) => {
    for (const validator of validators) {
      const error = validator(value);

      if (error) {
        return error;
      }
    }
  };
};
