import { useState } from "react";

function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTodo() {

        if (task.trim() === "") {
            return;
        }

        setTasks([...tasks, task]);
        setTask("");
    }

    function deleteTodo(index) {
        setTasks(tasks.filter((todo, i) => i !== index));
    }

    return (
        <div>

            <h1>My Todo List</h1>

            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />

            <button onClick={addTodo}>
                Add
            </button>

            <div>

                {tasks.map((todo, index) => (

                    <div key={index}>

                        <span>{todo}</span>

                        <button onClick={() => deleteTodo(index)}>
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
  
}

export default App;