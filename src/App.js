import "./App.css";

import { useState } from "react";
import { useHistory, Redirect, Route, Switch } from "react-router-dom";
import SearchContext from "./components/SearchContext";
import Searcher from "./components/Searcher";
import Boros from "./components/Boros";
import Boro from "./components/Boro";
import BusRoute from "./components/BusRoute";
import BusStop from "./components/BusStop";

function App() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const history = useHistory();

    const resetSearch = () => {
        setResults([]);
        setQuery("");
    };

    return (
        <div className='App'>
            <header>
                <h1
                    className='title-banner'
                    onClick={() => {
                        resetSearch();
                        history.push("/");
                    }}>
                    Better Bus Time
                </h1>
            </header>
            <main>
                <SearchContext.Provider value={{ resetSearch }}>
                    <Searcher
                        query={query}
                        setQuery={setQuery}
                        results={results}
                        setResults={setResults}
                    />
                    <Switch>
                        <Route
                            path='/boros/:id'
                            render={({ match }) => (
                                <Boro boroKey={match.params.id} />
                            )}
                        />
                        <Route path='/boros' render={() => <Boros />} />
                        <Route
                            path='/routes/:id'
                            render={({ match }) => (
                                <BusRoute routeId={match.params.id} />
                            )}
                        />
                        <Route
                            path='/stops/:id'
                            render={({ match }) => (
                                <BusStop stopCode={match.params.id} />
                            )}
                        />
                        <Route
                            path='/'
                            render={() => <Redirect to='/boros' />}
                        />
                    </Switch>
                </SearchContext.Provider>
            </main>
        </div>
    );
}

export default App;
