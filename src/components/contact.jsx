import { Link } from "react-router-dom";

function Contact() {
    return (
        <section id="contact">

            <h2>Contact Me</h2>

            <p>
                If you would like to get in touch with me, feel free to
                contact me through any of the following platforms.
            </p>

            <div className="contact-links">

                <a href="mailto:your-email@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>

                <a
                    href="https://github.com/Abissinia21"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                    GitHub
                </a>

            </div>

            <div className="links">
                <Link to="/github">Previous</Link>
                <Link to="/">Home</Link>
            </div>

        </section>
    );
}

export default Contact;