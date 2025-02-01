import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TaskEditForm({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="task-edit-form">
      <div>
        <label htmlFor="taskTitle">Task Title</label>
        <input
          type="text"
          id="taskTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Task Description</label>
        <ReactQuill value={description} onChange={setDescription} required />
      </div>
      <button type="submit" className="add-button">
        Save
      </button>
      <button type="button" onClick={onCancel} className="cancel-button">
        Cancel
      </button>
    </form>
  );
}

export default TaskEditForm;
