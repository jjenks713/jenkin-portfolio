import '../styles/globals.css'
import Navigator from '../components/Navigator'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigator />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
