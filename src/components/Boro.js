import { useEffect, useState } from "react";
import Requester from "./Requester";
import Routes from "./Routes";

export default function Boro({ boroKey }) {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        Requester.getFilteredRoutes(boroKey).then(data => setRoutes(data));
    }, [boroKey]);

    return <Routes routes={routes} />;
}
