import Appbar from '../components/Appbar'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Appbar/>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
