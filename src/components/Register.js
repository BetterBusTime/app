import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const history = useHistory();

    const handleChange = event => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const url =
            process.env.NODE_ENV === "production"
                ? "https://betterbustime-api.herokuapp.com/users/register"
                : "http://localhost:4000/users/register";
        const options = { headers: { "Content-Type": "application/json" } };

        try {
            const response = await axios.post(url, user, options);
            localStorage.bbt_token = response.data.data;
            history.push("/");
        } catch (error) {
            // We can catch axios errors here as well
            if (error.response) setError(error.response.data.data);
            console.error(error);
        }
    };

    return (
        <form className='register-form' onSubmit={handleSubmit}>
            <label for='username' className='form-label'>
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
            <label for='password' className='form-label'>
                Password
            </label>
            <input
                id='password'
                type='password'
                className='form-input'
                placeholder='Enter password'
                value={user.password}
                onChange={handleChange}
            />
            <button type='submit' className='submit-button control-button'>
                Register
            </button>
            <p className='error-text'>{error}</p>
        </form>
    );
}
