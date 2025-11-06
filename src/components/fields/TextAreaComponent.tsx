import {Form, Input} from "antd";
import type { FieldType } from '../types/FieldType';
import { getValidationRules } from "../utils/validation";


interface FieldProps {
    field: FieldType;
}

const TextAreaComponent = ({field}: FieldProps) => {
  const rules = getValidationRules(field);
  return (
    <Form.Item key={field.id} 
    name={field.name} 
    label={field.label}
    rules={rules}>
      <Input.TextArea placeholder={field.placeholder}
      showCount
      rows={4}
      allowClear
       />
    </Form.Item>
  )
}

export default TextAreaComponent