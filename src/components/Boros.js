import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
        <div className='boros-buttons'>
            {boros.map(boro => (
                <Button
                    key={boro.key}
                    onClick={() => history.push(`/boros/${boro.key}`)}>
                    {boro.val}
                </Button>
            ))}
        </div>
    );
}
