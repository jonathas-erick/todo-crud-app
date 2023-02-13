import { useState } from "react";

const TaskForm = ({ addTask }) => {
  // Define the state for the form
  const [task, setTask] = useState({ name: "" });

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now(), comments: [] });
    setTask({ name: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        className="form-control my-3"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <button color="dark" block="">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
