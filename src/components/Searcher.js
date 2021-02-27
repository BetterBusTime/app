import { useEffect, useState } from "react";
import Requester from "./Requester";

export default function Searcher() {
    const [query, setQuery] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                type='text'
                className='search-query'
                placeholder='Find your route...'
            />
            <button type='submit' className='search-button control-button'>
                Search
            </button>
        </form>
    );
}
