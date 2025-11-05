import type { FieldType } from "./types/FieldType";

interface fieldProps {
    field: FieldType;
}

const SelectComponent = ({field}: fieldProps) => {
  return (
    <div>SelectComponent</div>
  )
}

export default SelectComponent