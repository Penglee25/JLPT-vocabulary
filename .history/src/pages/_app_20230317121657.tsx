import type { AppProps } from 'next/app';
import React from 'react';
import Head from '../components/head';

import '../styles/global.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp;
