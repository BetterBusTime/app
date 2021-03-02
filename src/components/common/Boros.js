import { useHistory } from "react-router-dom";

export default function Boros() {
    const history = useHistory();

    const boros = [
        {
            key: "B",
            val: "Brooklyn"
        },
        {
            key: "Bx",
            val: "The Bronx"
        },
        {
            key: "M",
            val: "Manhattan"
        },
        {
            key: "Q",
            val: "Queens"
        },
        {
            key: "S",
            val: "Staten Island"
        }
    ];

    return (
        <div className='boros-buttons buttons-container'>
            {boros.map(boro => (
                <button
                    type='button'
                    key={boro.key}
                    className='boro-button control-button'
                    onClick={() => history.push(`/boros/${boro.key}`)}>
                    {boro.val}
                </button>
            ))}
        </div>
    );
}
