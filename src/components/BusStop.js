import { useEffect, useState } from "react";
import Requester from "./Requester";

export default function BusStop({ stopCode }) {
    const [stop, setStop] = useState(null);

    useEffect(() => {
        Requester.getStop(stopCode)
            .then(data => processStop(data))
            .then(data => setStop(data));
    }, [stopCode]);

    const processStop = data => {
        const processVisitors = visitors =>
            visitors
                .filter(
                    // TODO fix this so all buses show up
                    // Only buses that are actively traveling to the stop
                    visitor => !visitor.MonitoredVehicleJourney.ProgressStatus
                )
                .map(visitor => {
                    const ref = visitor.MonitoredVehicleJourney.VehicleRef;
                    const line =
                        visitor.MonitoredVehicleJourney.PublishedLineName[0];
                    const dest =
                        visitor.MonitoredVehicleJourney.DestinationName[0];
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

    const timeAway = calls => {
        const time =
            (new Date(calls.ExpectedArrivalTime) - new Date(stop.now)) / 1000;
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins.toFixed()} minute(s), ${secs.toFixed()} second(s)`;
    };

    return (
        stop && (
            <div className='bus-stop'>
                {stop.visitors.map(visitor => (
                    <div key={visitor.ref} className='stop-visitor'>
                        <p className='line-name'>
                            {visitor.line} to {visitor.dest}
                        </p>
                        <p className='time-away'>
                            {timeAway(visitor.calls)} -{" "}
                            {visitor.calls.ArrivalProximityText}
                        </p>
                    </div>
                ))}
            </div>
        )
    );
}
