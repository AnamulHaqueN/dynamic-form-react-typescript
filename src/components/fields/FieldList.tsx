import CheckComponent from "./CheckComponent";
import EmailComponent from "./EmailComponent";
import NumberComponent from "./NumberComponent";
import PasswordComponent from "./PasswordComponent";
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import TextAreaComponent from "./TextAreaComponent";
import TextComponent from "./TextComponent";
import type { FieldType } from "../types/FieldType";

interface FieldProps {
  field: FieldType;
}

const FieldList = ({field}: FieldProps) => {
  switch (field.type) {
    case "text":
      return <TextComponent field={field} />;
    case "email":
      return <EmailComponent field={field} />;
    case "radio":
      return <RadioComponent field={field}/>;
    case "password":
      return <PasswordComponent field={field} />;
    case "select":
      return <SelectComponent field={field} />;
    case "number":
      return <NumberComponent field={field} />;
    case "textarea":
      return <TextAreaComponent field={field} />;
    case "checkbox":
      return <CheckComponent field={field} />;
    default:
      return null;
  }
};

export default FieldList;
