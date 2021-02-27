import { useHistory } from "react-router-dom";

export default function Routes({ routes }) {
    const history = useHistory();

    return (
        <div className='route-buttons buttons-container'>
            {routes.map(route => (
                <button
                    type='button'
                    key={route.id}
                    className='route-button control-button'
                    style={{ backgroundColor: `#${route.color}` }}
                    onClick={() => history.push(`/routes/${route.id}`)}>
                    {route.shortName} - {route.longName}
                </button>
            ))}
        </div>
    );
}
