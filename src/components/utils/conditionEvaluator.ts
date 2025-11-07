import type { FormInstance } from "antd";
import type { FormValues, Condition, FormFieldValues } from "../types/FieldType";

export const evaluateCondition = (
  form: FormInstance<FormValues>,
  condition: Condition | boolean
) => {
  if (typeof condition == "boolean") return true;
  else {
    const fieldName = condition.field
      .replace("{{", "")
      .replace("}}", "")
      .trim() as FormFieldValues;
    const currentValue = form.getFieldValue(fieldName);

    const { operator, value } = condition;

    if (operator === "===") {
      if (currentValue == undefined) {
        return Boolean(currentValue) == Boolean(value);
      }
      return currentValue === value;
    }
    if (operator === "!==") {
      if (currentValue == undefined) {
        return Boolean(currentValue) != Boolean(value);
      }
      return currentValue !== value;
    }
    if (operator === "<") {
      return Number(currentValue) < Number(value);
    }
    if (operator === "<=") {
      return Number(currentValue) <= Number(value);
    }
    if (operator === ">") {
      return Number(currentValue) > Number(value);
    }
    if (operator === ">=") {
      return Number(currentValue) >= Number(value);
    }
    if (operator === "includes") {
      return currentValue.includes(value);
    }
    if (operator === "!includes") {
      return !currentValue.includes(value);
    }

    return true;
  }
};