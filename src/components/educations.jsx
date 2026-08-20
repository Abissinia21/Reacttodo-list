import { Link } from "react-router-dom";

function Education() {
    return (
        <section id="education">

            <h2>Education</h2>

            <div className="education-card">
                <h3>BSc in Computer Science</h3>

                <h4>Wollo University — Kombolcha Campus</h4>

                <p>
                    Currently studying Computer Science and developing
                    practical skills in software development and web technologies.
                </p>

                <p>2024 - Present</p>
            </div>

            <div className="links">
                <Link to="/projects">Previous</Link>
                <Link to="/github">Next</Link>
            </div>

        </section>
    );
}

export default Education;