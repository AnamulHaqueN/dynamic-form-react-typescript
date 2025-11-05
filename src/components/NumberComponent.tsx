import type { FieldType } from "./types/FieldType";

interface fieldProps {
    field: FieldType;
}

const NumberComponent = ({field}: fieldProps) => {
  return (
    <div>NumberComponent</div>
  )
}

export default NumberComponent