import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Requester from "./Requester";

export default function Boro({ boroKey }) {
    const [routes, setRoutes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Requester.getFilteredRoutes(boroKey).then(data => setRoutes(data));
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
