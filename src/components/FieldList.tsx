import CheckComponent from "./CheckComponent";
import EmailComponent from "./EmailComponent";
import NumberComponent from "./NumberComponent";
import PasswordComponent from "./PasswordComponent";
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import TextAreaComponent from "./TextAreaComponent";
import TextComponent from "./TextComponent";
import type { FieldType } from "./types/FieldType"


interface FieldProps {
    field: FieldType;
}

const Field = ({field}: FieldProps) => {
  return (
    <div>
        {field.type === 'text' && <TextComponent field = {field} />}
        {field.type === 'email' && <EmailComponent field = {field} />}
        {field.type === 'radio' && <RadioComponent  field = {field} />}
        {field.type === 'password' && <PasswordComponent field = {field} />}
        {field.type === 'select' && <SelectComponent field = {field} />}
        {field.type === 'number' && <NumberComponent field = {field} />}
        {field.type === 'textarea' && <TextAreaComponent field = {field} />}
        {field.type === 'checkbox' && <CheckComponent field = {field} />}
        
    </div>
  )
}

export default Field