import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Jump from "react-reveal/Jump";
import UserContext from "../user/UserContext";
import AuthPanel from "../user/AuthPanel";
import AnonPanel from "./AnonPanel";

export default function Header() {
    const { loggedIn } = useContext(UserContext);
    const history = useHistory();

    return (
        <header>
            <Jump>
                <h1 className='title-banner' onClick={() => history.push("/")}>
                    Better Bus Time
                </h1>
            </Jump>
            {loggedIn ? <AuthPanel /> : <AnonPanel />}
        </header>
    );
}
