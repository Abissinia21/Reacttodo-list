import { Link } from "react-router-dom";

function Skills() {
    return (
        <section id="skills">

            <h2>Skills</h2>

            <h3>My Skills</h3>

            <div className="skills-container">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Java</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Linux</span>
            </div>

            <h3>Currently Learning at SAGE</h3>

            <div className="skills-container learning">
                <span>C++</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>Full-Stack Development</span>
            </div>

            <div className="links">
                <Link to="/about">Previous</Link>
                <Link to="/projects">Next</Link>
            </div>

        </section>
    );
}

export default Skills;