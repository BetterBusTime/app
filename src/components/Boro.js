import Button from "react-bootstrap/Button";

export default function Boro({ routes }) {
    return (
        <div className='boro-routes'>
            {routes.map(route => (
                <Button key={route.id}>
                    {route.shortName} - {route.longName}
                </Button>
            ))}
        </div>
    );
}
