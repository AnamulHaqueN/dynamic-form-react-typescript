// import { useEffect, useState } from "react";
// import axios from "axios";
// import type { FieldType } from "./types/FieldType";
// import FieldList from "./fields/FieldList";
// import { Form, Button } from "antd";

// function Fetch() {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     axios
//       .get("/data.json")
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading data...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const onFinish = (values: any) => {
//     console.log("Form submitted successfully:", values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Form submission failed:", errorInfo);
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto" }}>
//       <h1 style={{ textAlign: "center" }}>{data.formId}</h1>
//       <h3 style={{ textAlign: "center", marginBottom: 20 }}>{data.title}</h3>

//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         onValuesChange={() => form.setFieldsValue({})} // Trigger re-render for conditional fields
//       >
//         {data?.fields.map((field: FieldType) => (
//           <FieldList key={field.id} field={field} form={form} />
//         ))}

//         <Form.Item>
//           <Button type="primary" htmlType="submit" block>
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }

// export default Fetch;
