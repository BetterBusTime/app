import { useEffect, useState } from "react";
import RoutesHelper from "./RoutesHelper";

export default function BusRoute({ routeId }) {
    const [route, setRoute] = useState(null);

    useEffect(() => {
        RoutesHelper.getRouteDetail(routeId).then(data => setRoute(data));
    }, [routeId]);

    return <>{route && route.entry.routeId}</>;
}
