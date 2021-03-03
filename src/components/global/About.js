export default function About() {
    return (
        <div className='about'>
            <p>
                <strong>
                    <em>How to use Better Bus Time?</em>
                </strong>{" "}
                If you already know your bus route, you can find what you're
                looking for using the search bar. Otherwise, you can narrow your
                search by clicking one of the <strong>Boro</strong> buttons
                right below the search bar; each boro has a number of bus
                routes.
            </p>
            <p>
                From there, look for a route whose description{" "}
                <strong>matches</strong> the areas of New York City you are
                traveling to/from. Once you've chosen your route, you'll see
                some details and a list of outbound and inbound stops. The{" "}
                <em>emphasized</em> text describes the roads the bus travels on
                for a majority of its route.
            </p>
            <p>
                Finally, once you've found a stop location close to you, you'll
                be able to see the arrival times of buses that serve that stop.
                One stop is served by multiple buses so make sure you're looking
                for your chosen bus route!
            </p>
            <p>Thank you for using Better Bus Time!</p>
        </div>
    );
}
