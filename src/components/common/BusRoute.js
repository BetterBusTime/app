import { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Requester from "../global/Requester";
import Stops from "./Stops";

export default function BusRoute({ routeId }) {
    const [route, setRoute] = useState(null);

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

    return (
        route && (
            <div className='bus-route' style={{ overflow: "hidden" }}>
                <Bounce left>
                    <div className='route-details'>
                        <p className='route-name'>
                            {route.shortName} - {route.longName}
                        </p>
                        <p className='route-desc'>{route.description}</p>
                    </div>
                </Bounce>
                <div className='bus-stops'>
                    <div className='outbound-direction buttons-container'>
                        <Bounce left>
                            <p className='outbound-label'>Outbound Stops</p>
                        </Bounce>
                        <Stops stops={route.outbound.stops} />
                    </div>
                    <div className='inbound-direction buttons-container'>
                        <Bounce right>
                            <p className='inbound-label'>Inbound Stops</p>
                        </Bounce>
                        <Stops stops={route.inbound.stops} />
                    </div>
                </div>
            </div>
        )
    );
}
