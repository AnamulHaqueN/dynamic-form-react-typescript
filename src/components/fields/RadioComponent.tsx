import { Form, Radio } from "antd";
import type { FieldType } from "../types/FieldType";
import type { Rule } from "antd/es/form";
import { getValidationRules } from "../utils/validation";

interface FieldProps {
  field: FieldType;
}

const RadioComponent = ({ field }: FieldProps) => {
  const rules = getValidationRules(field);

  return (
    <Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={rules}
      initialValue={field.defaultValue} 
    >
      <Radio.Group>
        {field.options?.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioComponent;
