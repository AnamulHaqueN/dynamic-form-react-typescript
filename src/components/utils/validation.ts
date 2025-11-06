import type { Rule } from "antd/es/form";
import type { FieldType } from "../types/FieldType";

export const getValidationRules = (field: FieldType): Rule[] => {
  if (!field.validations) return [];

  return field.validations
    .map((v): Rule => {
      switch (v.rule) {
        case "required":
          return { required: true, message: v.message };

        case "email":
          return { type: "email", message: v.message };

        case "minLength":
          return { min: Number(v.value), message: v.message };

        case "maxLength":
          return { max: Number(v.value), message: v.message };

        case "pattern":
          return v.value
            ? { pattern: new RegExp(v.value), message: v.message }
            : { message: v.message };

        case "min":
          return { type: "number", min: Number(v.value), message: v.message };

        case "max":
          return { type: "number", max: Number(v.value), message: v.message };

        default:
          return {};
      }
    })
    .filter((rule): rule is Rule => Object.keys(rule).length > 0);
};
