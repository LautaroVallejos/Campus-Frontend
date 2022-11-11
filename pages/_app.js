import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '../components/Footer'
import NavbarX from '../components/NavbarX'
import { QueryClient, QueryClientProvider } from 'react-query'
// import 'bootstrap/dist/css/bootstrap.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <NavbarX />
        <Component {...pageProps} />
        <Footer></Footer>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
