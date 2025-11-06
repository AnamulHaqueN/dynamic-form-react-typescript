import { Form, message, Select } from "antd";
import type { FieldType } from "../types/FieldType";
import type { Rule } from "antd/es/form";
import { getValidationRules } from "../utils/validation";

interface OptionType {
  label: string;
  value: string;
}

interface fieldProps {
    field: FieldType;
}

const SelectComponent = ({field}: fieldProps) => {
  const rules = getValidationRules(field);
  return (
    <Form.Item id={field.id} 
    name={field.name} 
    label={field.label}
    rules={rules}>
      <Select placeholder={field.placeholder}
      allowClear 
      options={field.options} />
    </Form.Item>
  )
}

export default SelectComponent