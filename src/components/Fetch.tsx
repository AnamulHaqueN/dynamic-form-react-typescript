import { useEffect, useState } from "react";
import axios from "axios";
import type { FieldType } from "./types/FieldType";
import Field from "./FieldList";

function Fetch() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>{data.formId}</h1>
      <h3>{data.title}</h3>
      {
        data?.fields.map((field: FieldType) => (
          <Field key = {field.id} field={field} />
        ))
      }
    </>
  );
}

export default Fetch;
