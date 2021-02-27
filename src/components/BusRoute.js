import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Requester from "./Requester";

export default function BusRoute({ routeId }) {
    const [route, setRoute] = useState(null);
    const history = useHistory();

    useEffect(() => {
        Requester.getRouteDetail(routeId)
            .then(data => processRoute(data))
            .then(data => setRoute(data));
    }, [routeId]);

    const processRoute = data => {
        const processStops = direction => ({
            ...direction,
            stops: direction.stopIds.map(id =>
                data.references.stops.find(s => s.id === id)
            )
        });

        const details = data.references.routes.find(
            r => r.id === data.entry.routeId
        );
        const to = processStops(data.entry.stopGroupings[0].stopGroups[0]);
        const from = processStops(data.entry.stopGroupings[0].stopGroups[1]);

        return { ...details, to: to, from: from };
    };

    const handleClick = stop => history.push(`/stops/${stop}`);

    return (
        route && (
            <div className='bus-route'>
                <div className='route-details'>
                    <p>
                        {route.shortName} - {route.longName}
                    </p>
                    <p>{route.description}</p>
                </div>
                <div className='bus-stops'>
                    <div className='direction-to'>
                        <p>TO:</p>
                        {route.to.stops.map(stop => (
                            <Button
                                key={stop.id}
                                onClick={() => handleClick(stop.code)}>
                                {stop.name}
                            </Button>
                        ))}
                    </div>
                    <div className='direction-from'>
                        <p>FROM:</p>
                        {route.from.stops.map(stop => (
                            <Button
                                key={stop.id}
                                onClick={() => handleClick(stop.code)}>
                                {stop.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}