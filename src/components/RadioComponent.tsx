import { Form, Radio, Button, Checkbox, Input, Select } from 'antd';
import type { FieldType } from "./types/FieldType";

interface fieldProps {
    field: FieldType;
}
const RadioComponent = ({field}: fieldProps) => {
  return (
    <form>
      <Form.Item key={field.id} name={field.name} label={field.label} initialValue={field.defaultValue}>
        <Radio.Group>
          {field.options?.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </form>
  )
}

export default RadioComponent