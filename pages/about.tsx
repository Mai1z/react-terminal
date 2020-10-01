import Layout from '../components/Layout'
import {MainContainer} from '../styles/Containers'
import React from 'react'
import {Paragraph} from '../styles/TextElements'

export default function About() {
    return (
        <Layout pageTitle="About">
            <MainContainer>
                <Paragraph light>This app simulates the operation of a mobile terminal</Paragraph>
            </MainContainer>
        </Layout>
    )
}