import {Form, Input} from "antd";
import type { FieldType } from '../types/FieldType';
import { getValidationRules } from "../utils/validation";
interface fieldProps {
    field: FieldType;
}
const EmailComponent = ({field}: fieldProps) => {
  const rules = getValidationRules(field);
  return (
    <Form.Item id={field.id} 
    name={field.name} 
    label={field.label}
    rules={rules}>
      <Input type={field.type} placeholder={field.placeholder} />
    </Form.Item>
  )
}

export default EmailComponent