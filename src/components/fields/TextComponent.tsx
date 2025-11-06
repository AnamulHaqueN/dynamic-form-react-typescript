import { Form, Input } from 'antd';
import type { FieldType } from '../types/FieldType';
import { getValidationRules } from '../utils/validation';


interface fieldProps {
    field: FieldType;
}

const TextComponent = ({field}: fieldProps) => {
  const rules = getValidationRules(field);
  return (
    <div className="Text">
      <header className="Text-header">
        <Form>
          <Form.Item id={field.id} 
          name={field.name} 
          label={field.label}
          rules={rules}>
            <Input type={field.type} placeholder={field.placeholder} />
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default TextComponent