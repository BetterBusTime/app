import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Requester from "./Requester";

export default function Searcher() {
    const [routes, setRoutes] = useState([]);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Requester.generateRoutes().then(data => setRoutes(data));
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
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
    };

    return (
        <>
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='search-query'
                    placeholder='Find your route...'
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button type='submit' className='search-button control-button'>
                    Search
                </button>
            </form>
            <div className='search-results buttons-container'>
                {results.map(result => (
                    <button
                        type='button'
                        key={result.id}
                        className='route-button control-button'
                        style={{ backgroundColor: `#${result.color}` }}
                        onClick={() => history.push(`/routes/${result.id}`)}>
                        {result.shortName} - {result.longName}
                    </button>
                ))}
            </div>
        </>
    );
}
