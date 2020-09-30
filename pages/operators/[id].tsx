import {GetServerSideProps, NextPage} from 'next'
import Layout from '../../components/Layout'
import {Operator} from '../../interfaces'
import {MainContainer} from '../../styles/Containers'
import {Form} from '../../components/Form'
import {PayOperatorProps} from '../../interfaces'
import {Title} from '../../styles/TextElements'

const PayOperator: NextPage<PayOperatorProps> = ({operator}) => {
    if (operator.id === undefined) {
        return (
            <h1>Fail</h1>
        )
    } else return (
        <Layout pageTitle={operator.name}>
            <MainContainer>
                <Title>{operator.name}</Title>
                <Form operatorName={operator.name}/>
            </MainContainer>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<PayOperatorProps> = async (_ctx) => {
    const data = await fetch(`http://localhost:3000/api/operators/${_ctx.query.id}`)
    const operator: Operator = await data.json()
    return {props: {operator}}
}

export default PayOperator
