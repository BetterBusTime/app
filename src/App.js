import "./App.css";

import { useEffect, useState } from "react";
import { useHistory, Redirect, Route, Switch } from "react-router-dom";
import UserContext from "./components/user/UserContext";
import Header from "./components/global/Header";
import Pins from "./components/user/Pins";
import Searcher from "./components/global/Searcher";
import UserForm from "./components/user/UserForm";
import Boro from "./components/common/Boro";
import Boros from "./components/common/Boros";
import BusRoute from "./components/common/BusRoute";
import BusStop from "./components/common/BusStop";

function App() {
    // Global user state
    const [loggedIn, setLoggedIn] = useState(false);
    const [pinnedRoutes, setPinnedRoutes] = useState([]);
    const [pinnedStops, setPinnedStops] = useState([]);

    // Global search state
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const history = useHistory();

    const resetSearch = () => {
        setResults([]);
        setQuery("");
    };

    // Listen for changes in history, and reset search when we navigate
    useEffect(() => {
        const unlisten = history.listen(() => resetSearch());
        return () => unlisten();
    }, [history]);

    // Check for credentials in localStorage, and set the state appropriately
    useEffect(() => {
        if (localStorage.username && localStorage.access_token) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <div className='App'>
            <UserContext.Provider
                value={{
                    loggedIn,
                    setLoggedIn,
                    pinnedRoutes,
                    setPinnedRoutes,
                    pinnedStops,
                    setPinnedStops
                }}>
                <Header />
                <main>
                    <Pins />
                    <Searcher
                        query={query}
                        setQuery={setQuery}
                        results={results}
                        setResults={setResults}
                        resetSearch={resetSearch}
                    />
                    <Switch>
                        {/* TODO make these routes self sufficient? */}
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
                        <Route
                            path='/'
                            render={() => <Redirect to='/boros' />}
                        />
                    </Switch>
                </main>
            </UserContext.Provider>
        </div>
    );
}

export default App;
