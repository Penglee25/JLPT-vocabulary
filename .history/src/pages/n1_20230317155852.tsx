import { useState } from "react";
import Navbar from "../components/navbar";
import { pickDB } from "../utils/search-words";

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