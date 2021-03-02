import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import Requester from "./Requester";

export default function UserForm({ text }) {
    const EMPTY_STRING = "";
    const [user, setUser] = useState({
        username: EMPTY_STRING,
        password: EMPTY_STRING
    });
    const [error, setError] = useState(EMPTY_STRING);
    const { setLoggedIn } = useContext(UserContext);
    const history = useHistory();

    const validates = () => {
        let msg = EMPTY_STRING;
        let valid = true;

        if (user.username === EMPTY_STRING) {
            msg = "Username should not be blank. ";
            valid = false;
        }
        if (user.password === EMPTY_STRING) {
            msg += "Password should not be blank.";
            valid = false;
        }

        setError(msg);
        return valid;
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (validates() === false) return;

        try {
            const response = await Requester.postUser(text, user);

            localStorage.access_token = response.headers["x-access-token"];
            localStorage.username = user.username;
            setLoggedIn(true);

            history.push("/");
        } catch (error) {
            // We can catch axios errors here as well
            if (error.response) setError(error.response.data.message);
            console.error(error);
        }
    };

    const handleChange = event => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };

    const toTitleCase = word => word[0].toUpperCase().concat(word.slice(1));

    return (
        <form className='user-form' onSubmit={handleSubmit}>
            <label htmlFor='username' className='form-label'>
                Username
            </label>
            <input
                id='username'
                type='text'
                className='form-input'
                placeholder='Enter your username'
                value={user.username}
                onChange={handleChange}
            />
            <label htmlFor='password' className='form-label'>
                Password
            </label>
            <input
                id='password'
                type='password'
                className='form-input'
                placeholder='Enter your password'
                value={user.password}
                onChange={handleChange}
            />
            <button type='submit' className='submit-button control-button'>
                {toTitleCase(text)}
            </button>
            <p className='error-text'>{error}</p>
        </form>
    );
}
