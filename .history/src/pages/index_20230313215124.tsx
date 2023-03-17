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
        <h1>JLPT Vocabulary API</h1>
        <p>A RESTful / GraphQL API for JPLT vocabulary from N5 to N1</p>
        <p>
          <a href="https://github.com/wkei/jlpt-vocab-api">
            https://github.com/wkei/jlpt-vocab-api
          </a>
        </p>
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
