import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";
import Boros from "./components/Boros";
import Boro from "./components/Boro";
import BusRoute from "./components/BusRoute";

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route
                    path='/boros/:key'
                    render={({ match }) => <Boro boroKey={match.params.key} />}
                />
                <Route path='/boros' render={() => <Boros />} />
                <Route
                    path='/routes/:id'
                    render={({ match }) => (
                        <BusRoute routeId={match.params.id} />
                    )}
                />
                <Route path='/' render={() => <Redirect to='/boros' />} />
            </Switch>
        </div>
    );
}

export default App;
