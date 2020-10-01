import {GetServerSideProps, NextPage} from 'next'
import Layout from '../../components/Layout'
import {Operator} from '../../interfaces'
import {MainContainer} from '../../styles/Containers'
import {OperatorButton} from '../../styles/Buttons'
import {OperatorsList} from '../../styles/MainElements'
import {Paragraph} from '../../styles/TextElements'
import {useRouter} from 'next/router'

interface PayOperatorProps {
    operators: Operator[]
}

const PayOperator: NextPage<PayOperatorProps> = ({operators}) => {
    const router = useRouter()
    return (
        <Layout pageTitle='Operators'>
            <MainContainer>
                <Paragraph light>Choose operator:</Paragraph>
                <OperatorsList>
                    {operators.map(operator => (
                        <OperatorButton key={operator.id} onClick={() => router.push(`/operators/${operator.id}`)}>
                            {operator.name}
                        </OperatorButton>
                    ))}
                </OperatorsList>
            </MainContainer>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<PayOperatorProps> = async (_ctx) => {
    const data = await fetch(`${process.env.API_URL}/api/operators`)
    const operators: Operator[] = await data.json()
    return {props: {operators}}
}

export default PayOperator
