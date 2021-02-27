import { useContext } from "react";
import { useHistory } from "react-router-dom";
import SearchContext from "./SearchContext";

export default function Boros() {
    const { resetSearch } = useContext(SearchContext);
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
                    onClick={() => {
                        resetSearch();
                        history.push(`/boros/${boro.key}`);
                    }}>
                    {boro.val}
                </button>
            ))}
        </div>
    );
}
