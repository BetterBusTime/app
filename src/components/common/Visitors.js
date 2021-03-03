import Bounce from "react-reveal/Bounce";

export default function Visitors({ visitors, now }) {
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
            return (arrival - new Date(now)) / 1000;
        };

        const time = getTime();

        let mins = Math.floor(time / 60).toFixed();
        if (isNaN(mins)) mins = " - ";

        let secs = (time % 60).toFixed();
        if (isNaN(secs)) secs = " - ";

        return `${mins} minute(s), ${secs} second(s)`;
    };

    return (
        <>
            {visitors.map((visitor, index) => (
                // Duplicate keys can show up because MTA data will supply
                // future data for the same bus, indicating round trips to
                // a stop
                <Bounce bottom key={`${visitor.ref}_${index}`}>
                    <div className='stop-visitor'>
                        <p className='line-name'>
                            {visitor.line} to {visitor.dest}
                        </p>
                        <p className='time-away'>
                            {timeAway(visitor.calls)} -{" "}
                            {visitor.calls.ArrivalProximityText}
                        </p>
                    </div>
                </Bounce>
            ))}
        </>
    );
}
