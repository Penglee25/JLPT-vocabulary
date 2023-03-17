import type { NextPage } from 'next';
import useSWR from 'swr';

import Head from '../components/head';
import Navbar from '../components/navbar';
import RESTful from '../components/restful';

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const n5Function = () => {
  const { data, error, mutate } = useSWR('/api/words?level=5&offset=20&limit=5', fetcher)

  const result =
    !data && !error
      ? ''
      : error
        ? JSON.stringify(error)
        : data.words;

  return <>
    {result.map((item: any) => (
      <div className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
        <span className='text-3xl font-bold'>Word: {item.word}</span>
        <p className='my-0'>Furigana {item.fu}</p>
        <p className='my-0'>Romaji</p>
        <p className='my-0'>Level</p>
      </div>
    ))}
  </>;

}

const Home: NextPage = () => {
  const { data, error, mutate } = useSWR('/api/words', fetcher)

  console.log(n5Function());

  const result =
    !data && !error
      ? ''
      : error
        ? JSON.stringify(error)
        : data.words;

  const random = Math.floor(Math.random() * result.length);
  const wordsAPIRes = result[random];

  return (
    <div className="">
      <Head />
      <Navbar />
      <div className="container px-6 prose min-w-full mx-auto my-20">

        <div className="grid md:grid-cols-2  gap-4 grid-cols-none mb-5">
          <div className="w-full p-28">
            <h1 className='mb-1 text-red-300'>JLPT Tango単語</h1>
            <span className="text-2xl">Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level</span>
            <div>
              <button className="rounded-full bg-red-500 px-10 hover:bg-red-300">N5</button>
            </div>
          </div>
          <div className="w-full p-28 text-center">
            <h1 className='mb-0 text-red-300'>{wordsAPIRes?.word}</h1>
            <span className='text-2xl'>Meaning: {wordsAPIRes?.meaning}</span><br />
            <span className='text-2xl'>Furigana: {wordsAPIRes?.furigana}</span><br />
            <span className='text-2xl'>Romaji: {wordsAPIRes?.romaji}</span><br />
            <span className='text-2xl'>Level: {wordsAPIRes?.level}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-5  gap-5 grid-cols-none mb-5">

          {
            () => {
              for (let i = 0; i <= 5; i++) {
                <>
                  <div className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                    <span className='text-3xl font-bold'>Word</span>
                    <p className='my-0'>Furigana</p>
                    <p className='my-0'>Romaji</p>
                    <p className='my-0'>Level</p>
                  </div>
                </>
              }
            }
          }


        </div>

        <hr />
        <RESTful />
        <hr />
      </div>
    </div>
  );
};

export default Home;
