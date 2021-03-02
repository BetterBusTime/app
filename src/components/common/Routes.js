import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../user/UserContext";
import Requester from "../global/Requester";
import pin from "../../paper-push-pin.svg";

export default function Routes({ routes }) {
    const { loggedIn, setPinnedRoutes } = useContext(UserContext);
    const history = useHistory();

    const pinRoute = async route => {
        try {
            const response = await Requester.postRoutePin(route);
            setPinnedRoutes(response.data.routes);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='route-buttons-container buttons-container'>
            {routes.map(route => (
                <div key={route.id} className='route-buttons'>
                    <button
                        type='button'
                        className='route-button control-button'
                        style={{ backgroundColor: `#${route.color}` }}
                        onClick={() => history.push(`/routes/${route.id}`)}>
                        {route.shortName} - {route.longName}
                    </button>
                    <button
                        disabled={!loggedIn}
                        className='route-pin-button pin-button'
                        style={{ backgroundColor: `#${route.color}` }}
                        onClick={() => pinRoute(route)}>
                        <img src={pin} alt='pin' className='pin-img' />
                    </button>
                </div>
            ))}
        </div>
    );
}
