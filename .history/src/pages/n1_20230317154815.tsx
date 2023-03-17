import { useState } from "react";
import Navbar from "../components/navbar";
import { pickDB } from "../utils/search-words";
import Pagination from "./pagination";

export default function n1() {

    const [wordPost, setWordPost] = useState();
    const data = pickDB(1);
    const itemsPerPage = 15;

    return (
        <div>
            <Navbar />
            <
        </div>
    )
}