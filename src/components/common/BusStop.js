import { useEffect, useState } from "react";
import Requester from "../global/Requester";

export default function BusStop({ stopCode }) {
    const [stop, setStop] = useState(null);

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

    const timeAway = calls => {
        // Some busses won't have an expected arrival time
        // All busses should have an aimed arrival time, which is our fallback
        // Expected arrival time is a little more accurate
        const getTime = () => {
            let arrival;
            if (calls.ExpectedArrivalTime) {
                arrival = new Date(calls.ExpectedArrivalTime);
            } else {
                arrival = new Date(calls.AimedArrivalTime);
            }
            return (arrival - new Date(stop.now)) / 1000;
        };

        const time = getTime();

        let mins = Math.floor(time / 60).toFixed();
        if (isNaN(mins)) mins = " - ";

        let secs = (time % 60).toFixed();
        if (isNaN(secs)) secs = " - ";

        return `${mins} minute(s), ${secs} second(s)`;
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
