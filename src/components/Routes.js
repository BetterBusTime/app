import { useEffect, useState } from "react";
import axios from "axios";

// TODO Routes should be a helper class that retrieves route data,
//      not a component we should be rendering
export default function Routes() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getRoutes().then(data => categorySort(data));
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
        // TODO object keys are not guaranteed to be in order - convert to Map()
        const boros = {
            b: [],
            bm: [],
            bx: [],
            bxm: [],
            m: [],
            q: [],
            qm: [],
            si: [],
            sim: [],
            x: []
        };

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

            switch (boro) {
                case "B":
                    boros.b.push(datum);
                    break;
                case "BM":
                    boros.bm.push(datum);
                    break;
                case "Bx":
                    boros.bx.push(datum);
                    break;
                case "BxM":
                    boros.bxm.push(datum);
                    break;
                case "M":
                    boros.m.push(datum);
                    break;
                case "Q":
                    boros.q.push(datum);
                    break;
                case "QM":
                    boros.qm.push(datum);
                    break;
                case "S":
                    boros.si.push(datum);
                    break;
                case "SIM":
                    boros.sim.push(datum);
                    break;
                case "X":
                    boros.x.push(datum);
                    break;
                default:
                    break;
            }
        });

        setRoutes(
            Object.values(boros).reduce((accum, curr) => {
                return accum.concat(
                    curr.sort((a, b) => {
                        if (a.route === b.route) {
                            if (a.aux < b.aux) return -1;
                            if (a.aux > b.aux) return 1;
                        }
                        return a.route - b.route;
                    })
                );
            }, [])
        );

        // TODO routes should be set at App level
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
