import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Requester from "./Requester";

export default function Boro({ boroKey }) {
    const [routes, setRoutes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Requester.getFilteredRoutes(boroKey).then(data => setRoutes(data));
    }, [boroKey]);

    return (
        <div className='route-buttons buttons-container'>
            {routes.map(route => (
                <button
                    type='button'
                    key={route.id}
                    className='route-button control-button'
                    style={{ backgroundColor: `#${route.color}` }}
                    onClick={() => history.push(`/routes/${route.id}`)}>
                    {route.shortName} - {route.longName}
                </button>
            ))}
        </div>
    );
}
