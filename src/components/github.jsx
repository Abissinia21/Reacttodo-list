import { Link } from "react-router-dom";

function Github() {
    return (
        <section id="github">

            <h2>GitHub</h2>

            <div className="github-projects">

                <a
                    href="https://github.com/Abissinia21/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/portfolio
                </a>

                <a
                    href="https://github.com/Abissinia21/calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/calculator
                </a>

                <a
                    href="https://github.com/Abissinia21/BMI-Calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/BMI-Calculator
                </a>

                <a
                    href="https://github.com/Abissinia21/project21"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/project21
                </a>

                <a
                    href="https://github.com/Abissinia21/ExpenseTracker"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/ExpenseTracker
                </a>

                <a
                    href="https://github.com/Abissinia21/todo-list"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/todo-list
                </a>

                <a
                    href="https://github.com/Abissinia21/Reacttodo-list"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abissinia21/Reacttodo-list
                </a>

            </div>

            <div className="links">
                <Link to="/education">Previous</Link>
                <Link to="/contact">Next</Link>
            </div>

        </section>
    );
}

export default Github;