
export type FieldTypeName = "text" | "email" | "radio" | "number" | "select" | "password" | "textarea" | "checkbox" ;  

export interface validations {
    rule: string,
    value?: string,
    message: string
}

export interface option {
   label: string,
   value?: string,
   message?: string
}

export interface condition {
    field: string,
    operator: string,
    value: string,
}

export interface FieldType{
    id: string,
    type: FieldTypeName,
    name: string,
    label: string,
    placeholder?:string,
    defaultValue?:string,
    validations?:validations[],
    options?:option[],
    condition?:condition[],
    dependsOn?:string,
}

export interface FormData {
    "formId": string,
    "title": string,
    field: FieldType[];
}