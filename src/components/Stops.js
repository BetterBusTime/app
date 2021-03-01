import { useHistory } from "react-router-dom";

export default function Stops({ stops }) {
    const history = useHistory();

    return (
        <div className='stop-buttons'>
            {stops.map(stop => (
                <button
                    type='button'
                    key={stop.id}
                    className='stop-button control-button'
                    onClick={() => history.push(`/stops/${stop.code}`)}>
                    {stop.name}
                </button>
            ))}
        </div>
    );
}
