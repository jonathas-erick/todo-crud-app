import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskComment from "./TaskComment";
import TaskForm from "./TaskForm";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", comments: [] },
    { id: 2, name: "Task 2", comments: [] },
    { id: 3, name: "Task 3", comments: [] },
  ]);

  // Method to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Method to update an existing task
  const updateTask = (id, newTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...newTask } : task))
    );
  };

  // Method to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Method to add a comment to a task
  const addComment = (id, comment) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.comments.push(comment);
        }
        return task;
      })
    );
  };

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        color: "#7289da",
        backgroundColor: "#2f3136",
      }}
    >
      <h1 style={{ color: "#7289da", textAlign: "center" }}>ToDo List</h1>
      <ListGroup>
        <TransitionGroup className="todo-list">
          {tasks.map(({ id, name, comments }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem
                style={{
                  backgroundColor: "#2f3136",
                  color: "white",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div style={{ fontWeight: "bold" }}>{name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <button
                      onClick={() => deleteTask(id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#7289da",
                        cursor: "pointer",
                      }}
                    >
                      Delete &times;
                    </button>
                    <button
                      onClick={() => {
                        const newTask = prompt("Enter updated task name: ");
                        if (newTask) {
                          updateTask(id, { name: newTask });
                        }
                      }}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#7289da",
                        cursor: "pointer",
                      }}
                    >
                      [Update]
                    </button>
                  </div>
                </div>
                <TaskComment id={id} addComment={addComment} />
                {comments.map((comment, index) => (
                  <p key={index} style={{ marginTop: "1rem" }}>
                    {comment}
                  </p>
                ))}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
      <TaskForm addTask={addTask} />
    </Container>
  );
};

export default ToDo;
