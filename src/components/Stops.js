import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import Requester from "./Requester";
import pin from "../paper-push-pin.svg";

export default function Stops({ stops }) {
    const { loggedIn, setPinnedStops } = useContext(UserContext);
    const history = useHistory();

    const pinStop = async stop => {
        try {
            const response = await Requester.postStopPin(stop);
            setPinnedStops(response.data.stops);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='stop-buttons-container'>
            {stops.map(stop => (
                <div key={stop.id} className='stop-buttons'>
                    <button
                        type='button'
                        className='stop-button control-button'
                        onClick={() => history.push(`/stops/${stop.code}`)}>
                        {stop.name}
                    </button>
                    <button
                        disabled={!loggedIn}
                        className='stop-pin-button pin-button'
                        onClick={() => pinStop(stop)}>
                        <img src={pin} alt='pin' className='pin-img' />
                    </button>
                </div>
            ))}
        </div>
    );
}
