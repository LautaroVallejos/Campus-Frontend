import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '../components/Footer'
import NavbarX from '../components/NavbarX'
// import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NavbarX />
      <Component {...pageProps} />
      <Footer></Footer>
    </NextUIProvider>
  );
}

export default MyApp;
