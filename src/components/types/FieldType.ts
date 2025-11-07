
export type FieldTypeName = "text" | "email" | "radio" | "number" | "select" | "password" | "textarea" | "checkbox" ;  

export interface validations {
    rule: string,
    value?: string,
    message: string
}

export interface option {
   label: string,
   value?: string | number | boolean,
   message?: string
}

export interface Condition {
  field: string; // e.g. "{{userType}}"
  operator:
    | "==="
    | "!=="
    | ">"
    | "<"
    | ">="
    | "<="
    | "includes"
    | "!includes";
  value: any;
}

export interface FieldType{
    id: string,
    type: FieldTypeName,
    name: string,
    label?: string,
    placeholder?:string,
    defaultValue?:string | boolean,
    validations?:validations[],
    options?:option[],
    condition?:Condition,
    dependsOn?:string,
}

export interface FormData {
    "formId": string,
    "title": string,
    fields: FieldType[];
}

export type FormValues = {
  userType?: string;
  email?: string;
  password?: string;
  companyName?: string;
  taxId?: string;
  country?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  specialOffers?: boolean;
  offerType?: string;
  adminCode?: string;
  age?: number;
  comments?: string;
};

export type FormFieldValues = keyof FormValues;