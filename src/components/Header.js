import { useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory();

    return (
        <header>
            <h1 className='title-banner' onClick={() => history.push("/")}>
                Better Bus Time
            </h1>
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
        </header>
    );
}
