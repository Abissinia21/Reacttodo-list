import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="container">

            <div className="logo">
                <img src="my.png" alt="Adoniyas logo" />
                <span>Adu</span>

                <button id="theme-toggle">
                    <i className="fa-solid fa-moon"></i>
                </button>
            </div>

            <div className="navbar">

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/education">Education</Link>
                <Link to="/github">Github</Link>
                <Link to="/contact">Contact</Link>

            </div>

        </nav>
    );
}

export default Nav;