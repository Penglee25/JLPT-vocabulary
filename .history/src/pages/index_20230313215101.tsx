import type { NextPage } from 'next';
import Script from 'next/script';

import GraphQL from '../components/graphql';
import Head from '../components/head';
import RESTful from '../components/restful';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-6">
      <Head />
      <div className="prose min-w-full mx-auto my-20">
        <hr />
        <RESTful />
        <hr />
        <GraphQL />
        <hr />
      </div>
      <Script
        async
        defer
        data-website-id="8b828576-7db9-4de6-87f0-b0f36a5a922d"
        src="https://kumami.vercel.app/umami.js"
      />
    </div>
  );
};

export default Home;
