import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            title: "Portfolio",
            description: "My personal developer portfolio.",
            github: "https://github.com/Abissinia21/portfolio"
        },
        {
            title: "Calculator",
            description: "A simple calculator built with JavaScript.",
            github: "https://github.com/Abissinia21/calculator"
        },
        {
            title: "BMI Calculator",
            description: "A BMI calculator that calculates body mass index.",
            github: "https://github.com/Abissinia21/BMI-Calculator"
        },
        {
            title: "Project 21",
            description: "A web development project.",
            github: "https://github.com/Abissinia21/project21"
        },
        {
            title: "Expense Tracker",
            description: "Track and manage personal expenses.",
            github: "https://github.com/Abissinia21/ExpenseTracker"
        },
        {
            title: "Todo List",
            description: "A simple Todo List application.",
            github: "https://github.com/Abissinia21/todo-list"
        },
        {
            title: "React Todo List",
            description: "A Todo List built with React.",
            github: "https://github.com/Abissinia21/Reacttodo-list"
        }
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>

            <div className="links">
                <Link to="/skills">Previous</Link>
                <Link to="/education">Next</Link>
            </div>
        </section>
    );
}

export default Projects;