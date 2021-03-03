import { useHistory } from "react-router-dom";

export default function Boros({ boros }) {
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
