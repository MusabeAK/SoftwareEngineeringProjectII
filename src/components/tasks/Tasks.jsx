import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { FaPlus } from "react-icons/fa";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const saveTasksToServer = (updatedTasks) => {
    fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTasks),
    }).catch((err) => console.error("Error saving tasks:", err));
  };

  const addTask = (newTask) => {
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasksToServer(updatedTasks);
    setShowForm(false);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    saveTasksToServer(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToServer(updatedTasks);
  };

  return (
    <div className="tasks-page">
      <h2>Project Tasks</h2>
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-button">
          <FaPlus /> New Task
        </button>
      )}
      {showForm && (
        <TaskForm addTask={addTask} hideForm={() => setShowForm(false)} />
      )}
      <TaskList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />{" "}
      {/* Ensure the function is passed here */}
    </div>
  );
}

export default Tasks;
