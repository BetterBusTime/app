import { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Requester from "./Requester";
import Routes from "../common/Routes";

export default function Searcher({
    query,
    setQuery,
    results,
    setResults,
    resetSearch
}) {
    const EMPTY_STRING = "";
    const [routes, setRoutes] = useState([]);

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
    }, [routes, query, setResults]);

    const handleChange = event => {
        // Reset our search results when the search field is empty
        if (event.target.value.trim() === EMPTY_STRING) {
            resetSearch();
            return;
        }

        setQuery(event.target.value);
    };

    return (
        <div className='search-container'>
            <Bounce left>
                <input
                    type='text'
                    className='search-query form-input'
                    placeholder='Find your route...'
                    value={query}
                    onChange={handleChange}
                />
            </Bounce>
            <Routes routes={results} spy={query} />
        </div>
    );
}
