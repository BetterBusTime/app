import Fade from "react-reveal/Fade";

export default function NoVisitors() {
    return (
        <>
            <Fade bottom delay={2000}>
                <p className='no-visitors'>
                    Ooops... it looks like there are no busses scheduled to
                    arrive at this stop any time soon. Sorry for the
                    inconvenience. Try again later?
                </p>
            </Fade>
        </>
    );
}
