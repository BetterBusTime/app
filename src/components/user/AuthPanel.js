import { useContext } from "react";
import UserContext from "./UserContext";

export default function AuthPanel() {
    const { setLoggedIn, setPinnedRoutes, setPinnedStops } = useContext(
        UserContext
    );

    const handleLogout = () => {
        localStorage.clear();
        setLoggedIn(false);
        setPinnedRoutes([]);
        setPinnedStops([]);
    };

    return (
        <div>
            <p className='user-greeting'>Hello, {localStorage.username}</p>
            <button
                type='button'
                className='user-button control-button'
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
