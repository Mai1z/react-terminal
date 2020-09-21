import {GetServerSideProps, NextPage} from 'next'
import Layout from '../../components/Layout'
import AppLink from '../../components/AppLink'
import {Operator} from '../../interfaces'


interface PayOperatorProps {
    operator: Operator
}

const PayOperator: NextPage<PayOperatorProps> = ({operator}) => {
    if (operator.id === undefined) {
        return (
            <h1>Fail</h1>
        )
    } else return (
        <Layout pageTitle='Index'>
            <h1>{operator.name}</h1>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<PayOperatorProps> = async (_ctx) => {
    const data = await fetch(`http://localhost:3000/api/operators/${_ctx.query.id}`)
    const operator: Operator = await data.json()
    return {props: {operator}}
}

export default PayOperator
