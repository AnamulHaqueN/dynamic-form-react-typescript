import type { FieldType } from './types/FieldType';


interface FieldProps {
    field: FieldType;
}

const TextAreaComponent = ({field}: FieldProps) => {
    console.log(field);
  return (
    <div>{field.id}</div>
  )
}

export default TextAreaComponent