import axios from "axios";

export default class Requester {
    // TODO update with correct production url
    static BASE =
        process.env.NODE_ENV === "production"
            ? "https://betterbustime-api.herokuapp.com"
            : "http://localhost:4000";
    static ROUTES_URL = this.BASE + "/routes";
    static STOPS_URL = this.BASE + "/stops";

    static getRouteList = async () => {
        const response = await axios.get(this.ROUTES_URL);
        return response.data;
    };

    static getRouteDetail = async id => {
        const url = `${this.ROUTES_URL}/${id}`;
        const response = await axios.get(url);
        return response.data;
    };

    static getStop = async id => {
        const url = `${this.STOPS_URL}/${id}`;
        const response = await axios.get(url);
        return response.data;
    };

    static categorySort = routes => {
        routes.forEach(route => {
            // Extract and store identifying information
            // We sort first by Boro, then by Route, then by Auxiliary info
            // [B] [R] [Aux]
            //  M  14  A-SBS

            // The regex comes from here
            // https://stackoverflow.com/a/42828320/1987724
            const [boro, num, aux] = route.shortName.split(/(\d+)/);

            route.boro = boro;
            route.route = num;
            route.aux = aux;
        });

        routes.sort((a, b) => {
            if (a.boro === b.boro && a.route === b.route) {
                if (a.aux < b.aux) return -1;
                if (a.aux > b.aux) return 1;
                return 0;
            }

            if (a.boro === b.boro) return a.route - b.route;

            if (a.boro < b.boro) return -1;
            if (a.boro > b.boro) return 1;
            return 0;
        });

        return routes;
    };

    static generateRoutes = async () => {
        const routes = await this.getRouteList();
        return this.categorySort(routes);
    };

    static getFilteredRoutes = async key => {
        const routes = await this.generateRoutes();

        switch (key) {
            case "B":
                return routes.filter(
                    route => route.boro === "B" || route.boro === "BM"
                );
            case "Bx":
                return routes.filter(
                    route => route.boro === "Bx" || route.boro === "BxM"
                );
            case "M":
                return routes.filter(
                    route => route.boro === "M" || route.boro === "X"
                );
            case "Q":
                return routes.filter(
                    route => route.boro === "Q" || route.boro === "QM"
                );
            case "S":
                return routes.filter(
                    route => route.boro === "S" || route.boro === "SIM"
                );
            default:
                break;
        }
    };
}
