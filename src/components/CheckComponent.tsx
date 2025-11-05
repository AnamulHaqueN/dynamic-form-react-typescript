import type { FieldType } from './types/FieldType'

interface fieldProps {
    field: FieldType;
}

const CheckComponent = ({field}: fieldProps) => {
  return (
    <div>CheckComponent</div>
  )
}

export default CheckComponent