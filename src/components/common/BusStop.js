import { useEffect, useState } from "react";
import Requester from "../global/Requester";
import Visitors from "./Visitors";
import NoVisitors from "./NoVisitors";

export default function BusStop({ stopCode }) {
    const [stop, setStop] = useState({});

    useEffect(() => {
        Requester.getStop(stopCode)
            .then(data => processStop(data))
            .then(data => setStop(data));
    }, [stopCode]);

    const processStop = data => {
        const processVisitors = visitors =>
            visitors.map(visitor => {
                const ref = visitor.MonitoredVehicleJourney.VehicleRef;
                const line =
                    visitor.MonitoredVehicleJourney.PublishedLineName[0];
                const dest = visitor.MonitoredVehicleJourney.DestinationName[0];
                return {
                    ref,
                    line,
                    dest,
                    calls: visitor.MonitoredVehicleJourney.MonitoredCall
                };
            });

        const visitors = processVisitors(
            data.StopMonitoringDelivery[0].MonitoredStopVisit
        );

        return { now: data.ResponseTimestamp, visitors: visitors };
    };

    return (
        <div className='bus-stop' style={{ overflow: "hidden" }}>
            {stop.visitors && stop.visitors.length > 0 ? (
                <Visitors visitors={stop.visitors} now={stop.now} />
            ) : (
                <NoVisitors />
            )}
        </div>
    );
}
