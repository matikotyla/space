import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';
import { Navbar } from 'components';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
