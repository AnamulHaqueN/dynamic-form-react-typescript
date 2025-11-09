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
  const allValues = Form.useWatch([], form);
  
   const getAllDependents = (fieldName: string): string[] => {
    // Find fields that directly depend on this field
    const directDependents = data.fields
      .filter((f) => f.dependsOn === fieldName)
      .map((f) => f.name);

    // Find nested dependents (fields that depend on the direct dependents)
    const nestedDependents = directDependents.flatMap((dep) =>
      getAllDependents(dep)
    );

    // Return all unique dependent field names
    return [...new Set([...directDependents, ...nestedDependents])];
  };

  // 🔹 When a field changes, reset all fields that depend on it
  const handleDependencies = (changedValues: any) => {
    const changedField = Object.keys(changedValues)[0];
    const dependentFields = getAllDependents(changedField);

    if (dependentFields.length > 0) {
      console.log("Resetting dependent fields:", dependentFields);
      form.resetFields(dependentFields as (keyof FormValues)[]);
    }
  };

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
        onValuesChange={handleDependencies}
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
                // label={field.type !== "checkbox" ? field.label: ""}
                // name={field.name}
                // valuePropName={
                //   field.type==="checkbox" ? "checked": "value"
                // }
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