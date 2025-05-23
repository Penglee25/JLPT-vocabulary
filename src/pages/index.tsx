import type { NextPage } from 'next';
import useSWR from 'swr';

import Navbar from '../components/navbar';

import Link from 'next/link';
import { level1, level2, level3, level4, level5 } from '../api';
import Footer from '../components/footer';
import { navLinks } from '../utils/data';

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
  const N3 = level3();
  const N2 = level2();
  const N1 = level1();

  return (
    <div className="">
      <Navbar />
      <div className="container px-6 prose min-w-full mx-auto my-20">

        <div className="grid md:grid-cols-2  gap-4 grid-cols-none mb-5 py-20">
          <div className="w-full pl-7">
            <h1 className='mb-1 text-red-300'>JLPT Tango単語</h1>
            <span className="text-2xl">Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level</span>
            <div className='mt-5'>
              <Link href={navLinks[5].path} passHref>
                <span className="rounded-full text-white bg-red-500 px-10 hover:bg-red-300 cursor-pointer p-1">N5 Level</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:text-center pl-7">
            <h1 className='mb-0 text-red-300'>{wordsAPIRes?.word}</h1>
            <span className='text-2xl'>Meaning: {wordsAPIRes?.meaning}</span><br />
            <span className='text-2xl'>Furigana: {wordsAPIRes?.furigana}</span><br />
            <span className='text-2xl'>Romaji: {wordsAPIRes?.romaji}</span><br />
            <span className='text-2xl'>Level: {wordsAPIRes?.level}</span>
          </div>
        </div>

        <Link href={navLinks[5].path} passHref>
          <span className="levels">Level 5 Vocabulary</span>
        </Link>
        <div className="grid md:grid-cols-5  gap-5 grid-cols-2 mb-20">
          {N5 !== '' ?
            N5.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg  ">
                <span className='text-2xl font-bold text-red-600'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
          }
        </div>

        <Link href={navLinks[4].path} passHref>
          <span className="levels">Level 4 Vocabulary</span>
        </Link>
        <div className="grid md:grid-cols-5  gap-5 grid-cols-2 mb-20">
          {N4 !== '' ?
            N4.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg  ">
                <span className='text-2xl font-bold text-red-600'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
          }
        </div>

        <Link href={navLinks[3].path} passHref>
          <span className="levels">Level 3 Vocabulary</span>
        </Link>
        <div className="grid md:grid-cols-5  gap-5 grid-cols-2 mb-20">
          {N3 !== '' ?
            N3.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg  ">
                <span className='text-2xl font-bold text-red-600'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
          }
        </div>

        <Link href={navLinks[2].path} passHref>
          <span className="levels">Level 2 Vocabulary</span>
        </Link>
        <div className="grid md:grid-cols-5  gap-5 grid-cols-2 mb-20">
          {N2 !== '' ?
            N2.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg  ">
                <span className='text-2xl font-bold text-red-600'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
          }
        </div>

        <Link href={navLinks[1].path} passHref>
          <span className="levels">Level 1 Vocabulary</span>
        </Link>
        <div className="grid md:grid-cols-5  gap-5 grid-cols-2 mb-20">
          {N1 !== '' ?
            N1.map((item: any, i: number) => (
              <div key={i} className="block rounded-lg bg-red-300 p-6 shadow-lg  ">
                <span className='text-2xl font-bold text-red-600'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
              </div>
            ))
            : null
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
