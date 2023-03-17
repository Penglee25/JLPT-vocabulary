import { useState } from "react";
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

    const [wordPost, setWordPost] = useState();
    const data = pickDB(1);

    console.log(data);
    

    return (
        <div>
            <Navbar />
            {/* <Pagination data={data} itemsPerPage={15} /> */}
        </div>
    )
}