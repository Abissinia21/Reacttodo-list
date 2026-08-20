import { Link } from "react-router-dom";
import myImage from "../assets/devimg.png";

function Home() {
    return (
        <section id="home">
            <div className="home-content">
                <h1>
                    Hi, I'm <span>Adoniyas</span>
                </h1>

                <h2>
                    Computer Science Student | Frontend Developer
                </h2>

                <p>
                    I'm a Computer Science student passionate about
                    building modern and responsive web applications.
                    I'm currently learning React, Node.js, C++ and
                    full-stack development.
                </p>

                <div className="home-buttons">
                    <Link to="/projects">View Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>

                <div className="links">
                    <Link to="/about">Next</Link>
                </div>
            </div>

            <div className="home-image">
          <img src={myImage} alt="My profile" />
            </div>
        </section>
    );
}

export default Home;