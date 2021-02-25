import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getRoutes()
            .then(data => categorySort(data))
            .then(data => setRoutes(data));
    }, []);

    const getRoutes = async () => {
        // TODO update with correct production url
        const url =
            process.env.NODE_ENV === "production"
                ? "http://localhost:4000/routes"
                : "http://localhost:4000/routes";
        const response = await axios.get(url);
        return response.data;
    };

    const categorySort = data => {
        data.forEach(datum => {
            // Extract and store identifying information
            // We sort first by Boro, then by Route, then by Auxiliary info
            // [B] [R] [Aux]
            //  M  14  A-SBS

            // The regex comes from here
            // https://stackoverflow.com/a/42828320/1987724
            const [boro, route, aux] = datum.shortName.split(/(\d+)/);

            datum.boro = boro;
            datum.route = route;
            datum.aux = aux;
        });

        data.sort((a, b) => {
            if (a.boro === b.boro && a.route === b.route) {
                if (a.aux < b.aux) return -1;
                if (a.aux > b.aux) return 1;
                return 0;
            }

            if (a.boro === b.boro) return a.route - b.route;

            if (a.boro < b.boro) return -1;
            if (a.boro > b.boro) return 1;
            return 0;
        });

        return data;
    };

    return (
        <div className='App'>
            {routes.map(route => (
                <div key={route.id}>
                    <p>
                        {route.shortName} - {route.longName}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default App;
