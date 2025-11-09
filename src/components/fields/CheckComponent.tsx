import { Checkbox, Form, message } from 'antd';
import type { FieldType } from '../types/FieldType'
import { getValidationRules } from '../utils/validation';

interface fieldProps {
    field: FieldType;
}

const CheckComponent = ({field}: fieldProps) => {
  const rules = getValidationRules(field);

  return (
    <Form.Item name={field.name}
    valuePropName="checked"
    rules={rules}
    >
    <Checkbox>{field.label}</Checkbox>
    </Form.Item>
  )
}

export default CheckComponent