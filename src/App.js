import "./App.css";

import { useEffect, useState } from "react";
import { useHistory, Redirect, Route, Switch } from "react-router-dom";
import UserForm from "./components/UserForm";
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

    useEffect(() => {
        const unlisten = history.listen(() => resetSearch());
        return () => unlisten();
    }, [history]);

    return (
        <div className='App'>
            <header>
                <h1 className='title-banner' onClick={() => history.push("/")}>
                    Better Bus Time
                </h1>
            </header>
            <main>
                <Searcher
                    query={query}
                    setQuery={setQuery}
                    results={results}
                    setResults={setResults}
                    resetSearch={resetSearch}
                />
                <Switch>
                    <Route
                        path='/users/login'
                        render={() => <UserForm text='login' />}
                    />
                    <Route
                        path='/users/register'
                        render={() => <UserForm text='register' />}
                    />
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
                    <Route path='/' render={() => <Redirect to='/boros' />} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
