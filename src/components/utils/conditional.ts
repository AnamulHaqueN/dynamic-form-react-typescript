interface Condition {
  field: string;
  operator: "===" | "!==" | ">" | "<" | ">=" | "<=";
  value: any;
}

export const shouldFieldBeVisible = (condition: Condition | undefined, formValues: any): boolean => {
  if (!condition) return true;

  const fieldKey = condition.field.replace("{{", "").replace("}}", "");
  const fieldValue = formValues[fieldKey];

  switch (condition.operator) {
    case "===":
      return fieldValue === condition.value;
    case "!==":
      return fieldValue !== condition.value;
    case ">":
      return fieldValue > condition.value;
    case "<":
      return fieldValue < condition.value;
    case ">=":
      return fieldValue >= condition.value;
    case "<=":
      return fieldValue <= condition.value;
    default:
      return true;
  }
};
