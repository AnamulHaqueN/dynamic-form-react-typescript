import type { FieldType } from "./types/FieldType";

interface fieldProps {
    field: FieldType;
}

const TextComponent = ({field}: fieldProps) => {
  return (
    <div>TextComponent</div>
  )
}

export default TextComponent