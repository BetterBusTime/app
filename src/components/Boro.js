import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import RoutesHelper from "./RoutesHelper";

export default function Boro({ boroKey }) {
    const [routes, setRoutes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        RoutesHelper.getFilteredRoutes(boroKey).then(data => setRoutes(data));
    }, [boroKey]);

    return (
        <div className='boro-routes'>
            {routes.map(route => (
                <Button
                    key={route.id}
                    onClick={() => history.push(`/routes/${route.id}`)}>
                    {route.shortName} - {route.longName}
                </Button>
            ))}
        </div>
    );
}
