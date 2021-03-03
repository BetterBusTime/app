import { useContext, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import UserContext from "./UserContext";
import Requester from "../global/Requester";
import Routes from "../common/Routes";
import Stops from "../common/Stops";

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
                    <Bounce left>
                        <p className='route-pins-label pins-label'>
                            Pinned Routes
                        </p>
                    </Bounce>
                    <Routes routes={pinnedRoutes} />
                </div>
            )}
            {pinnedStops.length > 0 && (
                <div className='stop-pins'>
                    <Bounce left>
                        <p className='stop-pins-label pins-label'>
                            Pinned Stops
                        </p>
                    </Bounce>
                    <Stops stops={pinnedStops} />
                </div>
            )}
        </div>
    );
}
