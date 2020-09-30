export interface LayoutProps {
    pageTitle: string
}

export type Operator = {
    id: number | string
    name: string
}

export type FormProps = {
    operatorName: string
}

export type FormData = {
    phone: string | number
    sum: number | string
    operator: string
}

export interface PayOperatorProps {
    operator: Operator
}

