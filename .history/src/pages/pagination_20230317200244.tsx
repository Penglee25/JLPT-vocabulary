import { useState } from "react";

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
            <div>
                <input type="text" value="" />
            </div>
            <div className=" grid md:grid-cols-5 gap-3 grid-cols-2">
                {renderData()}
            </div>

            <div className="pagination text-center mt-10">
                <button onClick={handlePrevClick}
                    disabled={currentPage === 1}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                </button>
                <button
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>
    )
}