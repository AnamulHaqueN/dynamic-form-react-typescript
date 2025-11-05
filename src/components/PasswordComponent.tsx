import type { FieldType } from "./types/FieldType";

interface fieldProps {
    field: FieldType;
}

const PasswordComponent = ({field}: fieldProps) => {
  return (
    <div>PasswordComponent</div>
  )
}

export default PasswordComponent