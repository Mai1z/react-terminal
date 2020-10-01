export interface LayoutProps {
    pageTitle: string
}

export interface Operator {
    id: number | string
    name: string
}

export interface FormProps {
    operatorName: string
}

export interface FormData {
    phone: string | number
    sum: number | string
    operator: string
}

export interface PayOperatorProps {
    operator: Operator
}

