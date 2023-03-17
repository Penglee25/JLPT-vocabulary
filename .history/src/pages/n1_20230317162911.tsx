import Navbar from "../components/navbar";
import { pickDB } from "../utils/search-words";
import Pagination from "./pagination";

interface words {
    word: string;
    furigana: string;
    meaning: string;
    romaji: string;
    level: number;
  }

export default function n1() {
    const data: words[] = pickDB(1);
    return (
        <div>
            <Navbar />
            
            <div className="container p-10">

                <div className="text-center my-20">
                    <span className="text-3xl text-gray-600 font-bold">
                        N1 Vocabularies
                    </span>
                </div>
        </div>
        </div>
            <Pagination data={data} itemsPerPage={15} />
        </div>
    )
}