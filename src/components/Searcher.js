import { useEffect, useState } from "react";
import Requester from "./Requester";
import Routes from "./Routes";

export default function Searcher() {
    const EMPTY_STRING = "";
    const [routes, setRoutes] = useState([]);
    const [query, setQuery] = useState(EMPTY_STRING);
    const [results, setResults] = useState([]);

    useEffect(() => {
        Requester.generateRoutes().then(data => setRoutes(data));
    }, []);

    // Update our search results every time the search query changes
    useEffect(() => {
        // Don't do anything with no query
        if (query === EMPTY_STRING) return;

        setResults(
            routes.filter(
                route =>
                    route.shortName
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                    route.longName
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                    route.description
                        .toLowerCase()
                        .includes(query.toLowerCase())
            )
        );
    }, [routes, query]);

    const handleChange = event => {
        const value = event.target.value.trim();

        // Reset our search results when the search field is empty
        if (value === EMPTY_STRING) {
            setResults([]);
            setQuery(value);
            return;
        }

        setQuery(event.target.value);
    };

    return (
        <div className='search-container'>
            <input
                type='text'
                className='search-query'
                placeholder='Find your route...'
                value={query}
                onChange={handleChange}
            />
            <Routes routes={results} />
        </div>
    );
}
