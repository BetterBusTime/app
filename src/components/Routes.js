import { useHistory } from "react-router-dom";
import pin from "../paper-push-pin.svg";

export default function Routes({ routes }) {
    const history = useHistory();

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
                    <img
                        src={pin}
                        alt='pin'
                        className='pin-button'
                        style={{ backgroundColor: `#${route.color}` }}
                    />
                </div>
            ))}
        </div>
    );
}
