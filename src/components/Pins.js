import { useEffect, useState } from "react";
import axios from "axios";

export default function Pins() {
    const [routes, setRoutes] = useState([]);
    const [stops, setStops] = useState([]);

    useEffect(() => {
        if (localStorage.access_token) {
            getPins().then(data => {
                //
            });
        }
    }, []);

    const getPins = async () => {
        const url =
            process.env.NODE_ENV === "production"
                ? "https://betterbustime-api.herokuapp.com/users"
                : "http://localhost:4000/users";
        const options = {
            headers: { Authorization: `Bearer ${localStorage.access_token}` }
        };

        try {
            const response = await axios.get(url, options);
            return response.data;
        } catch (error) {
            if (error.response) console.error(error.response.data.data);
            console.error(error);
        }
    };

    return <div className='pins'></div>;
}
