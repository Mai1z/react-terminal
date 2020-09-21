import {GetServerSideProps, NextPage} from 'next'
import Layout from '../../components/Layout'
import AppLink from '../../components/AppLink'
import {Operator} from '../../interfaces'

interface PayOperatorProps {
    operators: Operator[]
}

const PayOperator: NextPage<PayOperatorProps> = ({operators}) => {
    return (
        <Layout pageTitle='Index'>
            <ul>
                {operators.map(operator => (
                    <li key={operator.id}>
                        <AppLink label={operator.name} href={`/operators/${operator.id}`}/>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<PayOperatorProps> = async (_ctx) => {
    const data = await fetch('http://localhost:3000/api/operators')
    const operators: Operator[] = await data.json()
    return {props: {operators}}
}

export default PayOperator
