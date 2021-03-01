import { useEffect, useState } from "react";
import axios from "axios";
import Routes from "./Routes";
import Stops from "./Stops";

export default function Pins() {
    const [routes, setRoutes] = useState([]);
    const [stops, setStops] = useState([]);

    useEffect(() => {
        if (localStorage.access_token) {
            getPins().then(data => {
                setRoutes(data.routes);
                setStops(data.stops);
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

            // Check if an X-Access-Token header was sent
            // That means our current token has expired
            // Refresh the token in localStorage
            if (response.headers["x-access-token"]) {
                localStorage.access_token = response.headers["x-access-token"];
            }

            return response.data;
        } catch (error) {
            if (error.response) console.error(error.response.data.data);
            console.error(error);
        }
    };

    return (
        <div className='pins'>
            {routes.length > 0 && (
                <div className='route-pins'>
                    <p>Pinned Routes</p>
                    <Routes routes={routes} />
                </div>
            )}
            {stops.length > 0 && (
                <div className='stop-pins'>
                    <p>Pinned Stops</p>
                    <Stops stops={stops} />
                </div>
            )}
        </div>
    );
}
