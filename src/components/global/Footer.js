import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Footer() {
    return (
        <footer>
            <Fade left>
                <Link to='/about' className='footer-link'>
                    ABOUT
                </Link>
            </Fade>
            <Fade right>
                <Link to='/credits' className='footer-link'>
                    CREDITS
                </Link>
            </Fade>
        </footer>
    );
}
