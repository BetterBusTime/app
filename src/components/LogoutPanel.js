import { useContext } from "react";
import UserContext from "./UserContext";

export default function LogoutPanel() {
    const { setLoggedIn } = useContext(UserContext);

    return (
        <div>
            <p className='user-greeting'>Hello, {localStorage.username}</p>
            <button
                type='button'
                className='user-button control-button'
                onClick={() => {
                    localStorage.clear();
                    setLoggedIn(false);
                }}>
                Logout
            </button>
        </div>
    );
}
