import React from 'react'
import type { FieldType } from './types/FieldType';
interface fieldProps {
    field: FieldType;
}
const EmailComponent = ({field}: fieldProps) => {
  return (
    <div>EmailComponent</div>
  )
}

export default EmailComponent