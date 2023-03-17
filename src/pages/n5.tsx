import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination";
import { pickDB } from "../utils/search-words";

interface words {
    word: string;
    furigana: string;
    meaning: string;
    romaji: string;
    level: number;
}

export default function N5() {
    const data: words[] = pickDB(5);
    return (
        <div>
            <Navbar />
            <div className="container p-10">
                <div className="text-center my-20">
                    <span className="text-3xl text-gray-600 font-bold">
                        N5 Vocabularies
                    </span>
                </div>
                <Pagination data={data} itemsPerPage={15} />
            </div>
            <Footer />
        </div >
    )
}