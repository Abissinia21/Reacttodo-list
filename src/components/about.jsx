import { Link } from "react-router-dom";

function About() {
    return (
        <section id="about" className="about-section">

            <h2>About Me</h2>

            <p className="about-intro">
                I am a 3rd Year Computer Science student at Wollo University
                with a strong interest in software development and technology.
                I enjoy building responsive web applications and solving
                programming problems.
            </p>

            <p className="about-intro">
                My goal is to become a Full Stack Software Engineer while
                continuing to improve my skills in web development, software
                engineering, and cybersecurity.
            </p>


            {/* About Cards */}
            <div className="about-cards">

                <div className="about-card">
                    <span className="about-icon">🎓</span>
                    <h3>Education</h3>
                    <p>
                        3rd Year Computer Science student at
                        Wollo University.
                    </p>
                </div>

                <div className="about-card">
                    <span className="about-icon">💻</span>
                    <h3>Development</h3>
                    <p>
                        Interested in building modern and responsive
                        web applications.
                    </p>
                </div>

                <div className="about-card">
                    <span className="about-icon">🚀</span>
                    <h3>Career Goal</h3>
                    <p>
                        Become a professional Full Stack Software
                        Engineer.
                    </p>
                </div>

                <div className="about-card">
                    <span className="about-icon">🔐</span>
                    <h3>Interests</h3>
                    <p>
                        Web Development, Software Engineering and
                        Cybersecurity.
                    </p>
                </div>

            </div>


            {/* Currently Learning */}
            <div className="learning">

                <h3>Currently Learning</h3>

                <div className="learning-list">
                    <span>⚛️ React</span>
                    <span>🟢 Node.js</span>
                    <span>☕ Java</span>
                    <span>⚙️ C++</span>
                    <span>🌐 Web Development</span>
                </div>

            </div>


            {/* Developer Stats */}
            <div className="about-stats">

                <div>
                    <strong>3rd</strong>
                    <span>Year Student</span>
                </div>

                <div>
                    <strong>5+</strong>
                    <span>Projects</span>
                </div>

                <div>
                    <strong>∞</strong>
                    <span>Learning</span>
                </div>

                <div>
                    <strong>1</strong>
                    <span>Goal</span>
                </div>

            </div>


            {/* Navigation */}
            <div className="links">
                <Link to="/">Previous</Link>
                <Link to="/skills">Next</Link>
            </div>

        </section>
    );
}

export default About;