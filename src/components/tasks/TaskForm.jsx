import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TaskForm({ addTask, hideForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Both fields are required.");

    addTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label htmlFor="taskTitle">Task Title</label>
        <input
          type="text"
          id="taskTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Task Description</label>
        <ReactQuill
          value={description}
          onChange={setDescription}
          placeholder="Enter task description"
          required
        />
      </div>
      <button type="submit" className="add-button">
        Save
      </button>
      <button type="button" onClick={hideForm} className="cancel-button">
        Cancel
      </button>
    </form>
  );
}

export default TaskForm;
