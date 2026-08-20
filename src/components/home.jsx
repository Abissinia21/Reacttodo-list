import { Link } from "react-router-dom";
import myImage from "../assets/devimg.png";

function Home() {
    return (
        <section id="home">

            <div className="home-content">

                <p className="home-greeting">
                    👋 Welcome to my portfolio
                </p>

                <h1>
                    Hi, I'm <span>Adoniyas</span>
                </h1>

                <h2>
                    Computer Science Student | Frontend Developer
                </h2>

                <p className="home-description">
                    I'm a 3rd year Computer Science student passionate about
                    building modern, responsive and user-friendly web
                    applications. I'm currently developing my skills in
                    React, Node.js, Java, C++ and full-stack development.
                </p>

                <div className="home-tags">
                    <span>⚛️ React</span>
                    <span>🌐 Web Development</span>
                    <span>☕ Java</span>
                    <span>⚙️ C++</span>
                </div>

                <div className="home-buttons">
                    <Link to="/projects">View Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>

                <div className="home-stats">

                    <div>
                        <strong>3rd</strong>
                        <span>Year CS Student</span>
                    </div>

                    <div>
                        <strong>5+</strong>
                        <span>Projects</span>
                    </div>

                    <div>
                        <strong>∞</strong>
                        <span>Learning</span>
                    </div>

                </div>

                <div className="links">
                    <Link to="/about">Next →</Link>
                </div>

            </div>


            <div className="home-image">

                <div className="image-card">

                    <img src={myImage} alt="Adoniyas - Computer Science Student" />

                    <div className="status">
                        <span></span>
                        Currently learning React
                    </div>

                </div>

                <div className="code-card">
                    <p><span>const</span> developer = {`{`}</p>
                    <p>&nbsp;&nbsp;name: <b>"Adoniyas"</b>,</p>
                    <p>&nbsp;&nbsp;role: <b>"Frontend Developer"</b>,</p>
                    <p>&nbsp;&nbsp;goal: <b>"Full Stack Engineer"</b></p>
                    <p>{`}`};</p>
                </div>

            </div>

        </section>
    );
}

export default Home;