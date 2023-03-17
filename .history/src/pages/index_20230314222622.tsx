import type { NextPage } from 'next';
import useSWR from 'swr';

import Head from '../components/head';
import Navbar from '../components/navbar';
import RESTful from '../components/restful';

const fetcher = (url: string) => fetch(url).then((r) => r.json())


const Home: NextPage = () => {
  const api = '/api/words';

  const { data, error, mutate } = useSWR(() => api, fetcher)
  const randomized = data.words;


  const random = Math.floor(Math.random() * months.length);
  console.log(random, months[random]);

  console.log(...randomized);


  // const shuffle = (arr: any) => [...arr].sort(() => Math.random() - 0.5);
  //   data.words.map((a: any) => console.log(shuffle(a)))



  return (
    <div className="">
      <Head />
      <Navbar />
      <div className="container px-6 prose min-w-full mx-auto my-20">

        <div className="grid md:grid-cols-2  gap-4 grid-cols-none">
          <div className="w-full p-28">
            <h1 className='mb-1 text-red-300'>JLPT Tango単語</h1>
            <span className="text-2xl">Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level</span>
            <div>
              <button className="rounded-full bg-red-500 px-10 hover:bg-red-300">N5</button>
            </div>
          </div>
          <div className="w-full p-28 text-center">
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
