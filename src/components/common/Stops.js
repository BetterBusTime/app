import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import UserContext from "../user/UserContext";
import Requester from "../global/Requester";
import pin from "../../assets/paper-push-pin.svg";

export default function Stops({ stops }) {
    const { loggedIn, pinnedStops, setPinnedStops } = useContext(UserContext);
    const history = useHistory();

    const pinStop = async stop => {
        try {
            const response = await Requester.postStopPin(stop);
            setPinnedStops(response.data.stops);
        } catch (error) {
            console.error(error);
        }
    };

    const unpinStop = async stop => {
        try {
            const response = await Requester.deleteStopPin(stop);
            setPinnedStops(response.data.stops);
        } catch (error) {
            console.error(error);
        }
    };

    // See notes in Routes.js component for a similar method
    const isPinned = stop => {
        return pinnedStops.find(s => s.id === stop.id) !== undefined;
    };

    return (
        <div
            className='stop-buttons-container buttons-container'
            style={{ overflow: "hidden" }}>
            {stops.map(stop => (
                <Bounce bottom key={stop.id}>
                    <div className='stop-buttons'>
                        <button
                            type='button'
                            className='stop-button control-button'
                            onClick={() => history.push(`/stops/${stop.code}`)}>
                            {stop.name}
                        </button>
                        <button
                            disabled={!loggedIn}
                            className='stop-pin-button pin-button'
                            onClick={() =>
                                isPinned(stop)
                                    ? unpinStop(stop.id)
                                    : pinStop(stop)
                            }>
                            <img
                                src={pin}
                                alt='pin'
                                className='pin-img'
                                style={{
                                    filter: isPinned(stop)
                                        ? "invert(100%)"
                                        : "invert(0%)"
                                }}
                            />
                        </button>
                    </div>
                </Bounce>
            ))}
        </div>
    );
}
