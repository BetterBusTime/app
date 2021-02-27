import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchContext from "./SearchContext";
import Requester from "./Requester";

export default function BusRoute({ routeId }) {
    const [route, setRoute] = useState(null);
    const { resetSearch } = useContext(SearchContext);
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
        const outbound = processStops(
            data.entry.stopGroupings[0].stopGroups[0]
        );
        const inbound = processStops(data.entry.stopGroupings[0].stopGroups[1]);

        return { ...details, outbound: outbound, inbound: inbound };
    };

    const handleClick = stop => {
        resetSearch();
        history.push(`/stops/${stop}`);
    };

    return (
        route && (
            <div className='bus-route'>
                <div className='route-details'>
                    <p className='route-name'>
                        {route.shortName} - {route.longName}
                    </p>
                    <p className='route-desc'>{route.description}</p>
                </div>
                <div className='bus-stops'>
                    <div className='outbound-direction buttons-container'>
                        <p className='outbound-label'>Outbound Stops</p>
                        {route.outbound.stops.map(stop => (
                            <button
                                key={stop.id}
                                className='stop-button control-button'
                                onClick={() => handleClick(stop.code)}>
                                {stop.name}
                            </button>
                        ))}
                    </div>
                    <div className='inbound-direction buttons-container'>
                        <p className='inbound-label'>Inbound Stops</p>
                        {route.inbound.stops.map(stop => (
                            <button
                                key={stop.id}
                                className='stop-button control-button'
                                onClick={() => handleClick(stop.code)}>
                                {stop.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}
