import { Button, Form } from 'antd';
import type {FormData, FormValues } from './types/FieldType';
import { evaluateCondition } from './utils/conditionEvaluator';
import FieldList from "./fields/FieldList";
interface PropsData {
  data: FormData;
}

const DynamicForm = ({data}: PropsData) => {
  console.log(data);
  const [form] = Form.useForm<FormValues>();
  const values = Form.useWatch([], form);
  
  const onFinish = (values: FormValues) => {
  setTimeout(() => {
    console.log("Form Data:", values);
    form.resetFields();
  }, 1000);
  };

  return (
    <div className="border-black border-2 w-2xl">
      <h1 className="text-center">{data.title}</h1>
      
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        labelCol={{span: 12}}
        wrapperCol={{span: 25}}
      >
      
       {data.fields.map((field) => (
        <Form.Item
          shouldUpdate
          noStyle
          key={field.id}
        >
          {() =>
            evaluateCondition(form, field.condition ?? true) ? (
              <Form.Item
                label={field.type !== "checkbox" ? field.label: ""}
                name={field.name}
                valuePropName={
                  field.type==="checkbox" ? "checked": "value"
                }
                initialValue={field.defaultValue}
              >
                <FieldList field={field} />
              </Form.Item>
            ): null
          }
        </Form.Item>
       ))}

       <Form.Item>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
       </Form.Item>
      </Form>

    </div>
  )
}

export default DynamicForm