import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      {/* <Navbar></Navbar> */}
      <Component {...pageProps} />
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default MyApp;
