import Layout from '../components/Layout'
import AppLink from '../components/AppLink'

export default function Home() {
  return (
      <Layout pageTitle="Home">
          <h1>Works</h1>
          <AppLink label='Операторы' href='/operators'/>
      </Layout>
  )
}
