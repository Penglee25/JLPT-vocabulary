import { useState } from "react";
import { navLinks } from "../utils/data";

interface Props<T> {
    data: T[];
    itemsPerPage: number;
}

export default function pagination<T>({ data, itemsPerPage }: Props<T>) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const renderData = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end).map((item: any, index: number) => (
            <div key={index} className="block rounded-lg bg-red-300 p-6 shadow-lg dark:bg-neutral-700">
                <span className='text-2xl font-bold text-red-600'>{item.word}</span>
                <p className='my-0 text-lg'>Furigana: {item.furigana}</p>
                <p className='my-0 text-lg'>Romaji: {item.romaji}</p>
                <p className='my-0 text-lg'>Level: {item.level}</p>
            </div>
        ));
    };

    return (
        <div>
            <div className="container p-10">

                <div className="text-center my-20">
                    <span className="text-3xl text-gray-600 font-bold">
                        N1 Vocabularies
                    </span>
                </div>


            </div>
        </div>
    )
}