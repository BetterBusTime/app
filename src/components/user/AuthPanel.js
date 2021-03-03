import { useContext } from "react";
import Fade from "react-reveal/Fade";
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
        <div style={{ overflow: "hidden" }}>
            <Fade left>
                <p className='user-greeting'>Hello, {localStorage.username}</p>
            </Fade>
            <Fade right>
                <button
                    type='button'
                    className='user-button control-button'
                    onClick={handleLogout}>
                    Logout
                </button>
            </Fade>
        </div>
    );
}
