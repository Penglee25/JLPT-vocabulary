import { useState } from "react";
import Navbar from "../components/navbar";

export default function n1() {

    const [wordPost, setWordPost] = useState();
    const db = 

    return (
        <div>
            <Navbar />
            <div className="container p-10">

                <div className="text-center my-20">
                    <span className="text-3xl text-gray-600 font-bold">N1 Vocabularies</span>
                </div>

                <div className=" grid md:grid-cols-5 gap-3 grid-cols-3">
                    <div key={0} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                        <span className='text-2xl font-bold text-red-600'>asd</span>
                        <p className='my-0 text-lg'>Furigana: asd</p>
                        <p className='my-0 text-lg'>Romaji: asd</p>
                        <p className='my-0 text-lg'>Level: asd</p>
                    </div>
                    <div key={0} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                        <span className='text-2xl font-bold text-red-600'>asd</span>
                        <p className='my-0 text-lg'>Furigana: asd</p>
                        <p className='my-0 text-lg'>Romaji: asd</p>
                        <p className='my-0 text-lg'>Level: asd</p>
                    </div>
                    <div key={0} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                        <span className='text-2xl font-bold text-red-600'>asd</span>
                        <p className='my-0 text-lg'>Furigana: asd</p>
                        <p className='my-0 text-lg'>Romaji: asd</p>
                        <p className='my-0 text-lg'>Level: asd</p>
                    </div>
                    <div key={0} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                        <span className='text-2xl font-bold text-red-600'>asd</span>
                        <p className='my-0 text-lg'>Furigana: asd</p>
                        <p className='my-0 text-lg'>Romaji: asd</p>
                        <p className='my-0 text-lg'>Level: asd</p>
                    </div>
                    <div key={0} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                        <span className='text-2xl font-bold text-red-600'>asd</span>
                        <p className='my-0 text-lg'>Furigana: asd</p>
                        <p className='my-0 text-lg'>Romaji: asd</p>
                        <p className='my-0 text-lg'>Level: asd</p>
                    </div>
                </div>

                <div className="pagination text-center mt-10">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </a>
                </div>

            </div>
        </div>
    )
}