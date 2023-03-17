import type { NextPage } from 'next';

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
      </div>
    </div>
  );
};

export default Home;
