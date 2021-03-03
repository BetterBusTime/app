import { useHistory } from "react-router-dom";
import B from "../../assets/brooklyn.jpg";
import Bx from "../../assets/bronx.jpg";
import M from "../../assets/manhattan.jpg";
import Q from "../../assets/queens.jpg";
import S from "../../assets/staten-island.jpg";

export default function Boros() {
    const boros = [
        {
            key: "B",
            val: "Brooklyn",
            img: B
        },
        {
            key: "Bx",
            val: "The Bronx",
            img: Bx
        },
        {
            key: "M",
            val: "Manhattan",
            img: M
        },
        {
            key: "Q",
            val: "Queens",
            img: Q
        },
        {
            key: "S",
            val: "Staten Island",
            img: S
        }
    ];

    const history = useHistory();

    return (
        <div className='boros-buttons buttons-container'>
            {boros.map(boro => (
                <div
                    type='button'
                    key={boro.key}
                    className='boro-button control-button'
                    onClick={() => history.push(`/boros/${boro.key}`)}>
                    <img src={boro.img} alt={boro.val} className='boro-img' />
                    <p className='boro-label'>{boro.val}</p>
                </div>
            ))}
        </div>
    );
}
