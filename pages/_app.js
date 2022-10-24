import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
<<<<<<< HEAD
// import 'bootstrap/dist/css/bootstrap.css'
=======
//import 'bootstrap/dist/css/bootstrap.css'
>>>>>>> f2a2d000eb5c8d6c3fd7c8468a2f076fb943fb66

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Navbar></Navbar>
      <Component {...pageProps} />
<<<<<<< HEAD
      <Footer/>
=======
      <Footer></Footer>
>>>>>>> f2a2d000eb5c8d6c3fd7c8468a2f076fb943fb66
    </NextUIProvider>
  );
}

export default MyApp;
