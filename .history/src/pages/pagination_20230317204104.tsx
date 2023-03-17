import { useState } from "react";

interface Props<T> {
    data: T[];
    itemsPerPage: number;
}

export default function pagination<T>({ data, itemsPerPage }: Props<T>) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredData = data.filter((item: any) => {
        const values = Object.values(item);
        return values.some((value: any) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const renderData = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredData.slice(start, end).map((item: any, index: number) => (
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
            <div className="mb-10 flex justify-center">
                <div className="relative md:w-3/6 w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" value={searchTerm} onChange={handleSearchTermChange} id="default-search" className=" outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-300 focus:border-red-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search JPLT words..." required />
                </div>
            </div>
            <div className=" grid md:grid-cols-5 gap-3 grid-cols-2">
                {renderData()}
            </div>

            <div className="pagination text-center mt-10">
                <button onClick={handlePrevClick}
                    disabled={currentPage === 1 ? "true"}
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