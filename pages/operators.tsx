import {GetServerSideProps, NextPage} from 'next'
import Layout from '../components/Layout'

type Events = {
    id: string | number
    name: string
}

interface PayOperatorProps {
    events: Events[]
}

const PayOperator: NextPage<PayOperatorProps> = ({events}) => {
    return (
        <Layout pageTitle='Operators'>
            {JSON.stringify(events)}
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<PayOperatorProps> = async (_ctx) => {
    const data = await fetch('http://localhost:3000/api/operators')
    const events: Events[] = await data.json()
    return {props: {events}}
}

export default PayOperator
