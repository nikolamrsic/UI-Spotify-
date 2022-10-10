import '../styles/globals.css'
import '../styles/main.scss'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Player from '../components/player'
import PlayListProvider from '../components/playListContext'

import AuthContextProvider from '../components/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
   <PlayListProvider>
      <Component {...pageProps} />
    </PlayListProvider>
    </AuthContextProvider>
  )
}

export default MyApp
