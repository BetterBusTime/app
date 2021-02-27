import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";
import Boros from "./components/Boros";
import Boro from "./components/Boro";
import BusRoute from "./components/BusRoute";
import BusStop from "./components/BusStop";

function App() {
    return (
        <div className='App'>
            <header>
                <h1 className='title-banner'>Better Bus Time</h1>
            </header>
            <main>
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
                    <Route path='/' render={() => <Redirect to='/boros' />} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
