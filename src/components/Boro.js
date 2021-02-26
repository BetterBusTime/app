import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import RoutesHelper from "./RoutesHelper";

export default function Boro({ boroKey }) {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        RoutesHelper.getFilteredRoutes(boroKey).then(data => setRoutes(data));
    }, [boroKey]);

    return (
        <div className='boro-routes'>
            {routes.map(route => (
                <Button key={route.id}>
                    {route.shortName} - {route.longName}
                </Button>
            ))}
        </div>
    );
}
