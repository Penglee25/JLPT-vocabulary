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

export default function n3() {

    const data: words[] = pickDB(3);

    return (
        <div>
            <Navbar />
            <Pagination data={data} itemsPerPage={15} />
        </div>
    )
}