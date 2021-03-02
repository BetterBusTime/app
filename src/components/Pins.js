import { useContext, useEffect } from "react";
import UserContext from "./UserContext";
import Requester from "./Requester";
import Routes from "./Routes";
import Stops from "./Stops";

export default function Pins() {
    const {
        pinnedRoutes,
        setPinnedRoutes,
        pinnedStops,
        setPinnedStops
    } = useContext(UserContext);

    useEffect(() => {
        if (localStorage.access_token) {
            getPins().then(data => {
                setPinnedRoutes(data.routes);
                setPinnedStops(data.stops);
            });
        }
    }, [setPinnedRoutes, setPinnedStops]);

    const getPins = async () => {
        try {
            const response = await Requester.getPins();

            // Check if an X-Access-Token header was sent
            // That means our current token has expired
            // Refresh the token in localStorage
            if (response.headers["x-access-token"]) {
                localStorage.access_token = response.headers["x-access-token"];
            }

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='pins'>
            {pinnedRoutes.length > 0 && (
                <div className='route-pins'>
                    <p>Pinned Routes</p>
                    <Routes routes={pinnedRoutes} />
                </div>
            )}
            {pinnedStops.length > 0 && (
                <div className='stop-pins'>
                    <p>Pinned Stops</p>
                    <Stops stops={pinnedStops} />
                </div>
            )}
        </div>
    );
}
