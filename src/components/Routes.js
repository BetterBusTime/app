import { useEffect, useState } from "react";
import axios from "axios";

// Symbol mapping
// Bx/BxM - Bronx/Bronx Manhattan
// B/BM - Brooklyn/Brooklyn Manhattan
// M/X - Manhattan/Manhattan Express
// Q/QM  - Queens/Queens Manhattan
// S/SIM - Staten Island/Staten Island Manhattan

export default function Routes() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getRoutes().then(routes => setRoutes(routes));
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

    return (
        <>
            {routes.map(route => (
                <div key={route.id}>
                    <p>
                        {route.shortName} - {route.longName}
                    </p>
                </div>
            ))}
        </>
    );
}
