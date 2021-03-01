import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import AnonPanel from "./AnonPanel";
import AuthPanel from "./AuthPanel";

export default function Header() {
    const { loggedIn } = useContext(UserContext);
    const history = useHistory();

    return (
        <header>
            <h1 className='title-banner' onClick={() => history.push("/")}>
                Better Bus Time
            </h1>
            {loggedIn ? <AuthPanel /> : <AnonPanel />}
        </header>
    );
}
