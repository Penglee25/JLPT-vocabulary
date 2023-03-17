import type { NextPage } from 'next';

import Head from '../components/head';
import Navbar from '../components/navbar';
import RESTful from '../components/restful';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head />
      <Navbar />
      <div className="container mx-auto px-6 prose min-w-full mx-auto my-20">
       
        <hr />
        <RESTful />
        <hr />
      </div>
    </div>
  );
};

export default Home;
