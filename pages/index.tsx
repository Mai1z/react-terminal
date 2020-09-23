import Layout from '../components/Layout'
import {MainContainer} from '../styles/Containers'
import {Title, Paragraph} from '../styles/TextElements'
import {Button} from '../styles/Buttons'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
      <Layout pageTitle="Home">
          <MainContainer>
              <Title main>React Terminal</Title>
              <Paragraph light>Pay for the phone quick and easy!</Paragraph>
              <Button onClick={() => router.push('/operators')}>Get started!</Button>
          </MainContainer>
      </Layout>
  )
}
