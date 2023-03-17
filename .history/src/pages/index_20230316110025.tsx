import type { NextPage } from 'next';
import useSWR from 'swr';

import Head from '../components/head';
import Navbar from '../components/navbar';
import RESTful from '../components/restful';

import Link from 'next/link';
import { level4, level5 } from '../api';

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const Home: NextPage = () => {
  const { data, error, mutate } = useSWR('/api/words', fetcher)

  const result =
    !data && !error
      ? ''
      : error
        ? JSON.stringify(error)
        : data.words;

  const random = Math.floor(Math.random() * result.length);
  const wordsAPIRes = result[random];

  const N5 = level5();
  const N4 = level4();

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

        <span className='link'><Link href="/">Level 5 Vocabulary</Link></span>
              <button className="rounded-full bg-red-500 px-10 hover:bg-red-300">N5</button>
        <div className="grid md:grid-cols-5  gap-5 grid-cols-3 mb-20">
          {N5 !== '' ?
            N5.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                <span className='text-2xl font-bold'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
          }
        </div>

        <div className="grid md:grid-cols-5  gap-5 grid-cols-3 mb-20">
          {N4 !== '' ?
            N4.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                <span className='text-2xl font-bold'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
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
