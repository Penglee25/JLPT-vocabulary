import type { NextPage } from 'next';

import Head from '../components/head';
import Navbar from '../components/navbar';
import RESTful from '../components/restful';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head />
      <Navbar />
      <div className="container px-6 prose min-w-full mx-auto my-20">


        <div className="grid md:grid-cols-2  gap-4 grid-cols-none">
          <div className="w-full border-2 border-red-500 p-3">
            <h1 className='mb-0'>JLPT Tango単語</h1>
            <span className="text-2xl">Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level</span>
          </div>
          <div className="w-full border-2 border-red-500 p-3">
            asd
          </div>
        </div>

        <hr />
        <RESTful />
        <hr />
      </div>
    </div>
  );
};

export default Home;
