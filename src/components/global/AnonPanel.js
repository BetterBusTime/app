import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function AnonPanel() {
    const history = useHistory();

    return (
        <div className='user-buttons'>
            <Fade left>
                <button
                    type='button'
                    className='user-button control-button'
                    onClick={() => history.push("/users/register")}>
                    Register
                </button>
            </Fade>
            <Fade right>
                <button
                    type='button'
                    className='user-button control-button'
                    onClick={() => history.push("/users/login")}>
                    Login
                </button>
            </Fade>
        </div>
    );
}
