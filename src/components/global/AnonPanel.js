import { useHistory } from "react-router-dom";

export default function AnonPanel() {
    const history = useHistory();

    return (
        <div className='user-buttons'>
            <button
                type='button'
                className='user-button control-button'
                onClick={() => history.push("/users/register")}>
                Register
            </button>
            <button
                type='button'
                className='user-button control-button'
                onClick={() => history.push("/users/login")}>
                Login
            </button>
        </div>
    );
}
