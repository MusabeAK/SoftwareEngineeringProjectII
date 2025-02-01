import React from "react";
import TaskEditForm from "./TaskEditForm";
import ConfirmModal from "../ConfirmModal";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

function TaskItem({
  task,
  onClick,
  isExpanded,
  onEditTask,
  onDeleteTask,
  taskIndex,
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const handleEdit = (updatedTask) => {
    onEditTask(taskIndex, updatedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    onDeleteTask(taskIndex);
    setShowConfirmModal(false);
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
  };

  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div className="task-item">
      {!isEditing ? (
        <>
          <div>
            <h3>{task.title}</h3>
            <div className="task-description">
              {isExpanded ? (
                <div dangerouslySetInnerHTML={{ __html: task.description }} />
              ) : (
                <p>{stripHtmlTags(task.description).substring(0, 185)}...</p>
              )}
            </div>
            <div className="task-actions"></div>
          </div>
          <div className="divider" />
          <button className="toggle-button" onClick={onClick}>
            {isExpanded ? "⬆️ Show Less" : "⬇️ Show More"}
          </button>
          <button onClick={handleDelete} className="delete-button">
            <FaRegTrashAlt />
          </button>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            <FaEdit />
          </button>
        </>
      ) : (
        <TaskEditForm
          task={task}
          onSave={handleEdit}
          onCancel={() => setIsEditing(false)}
        />
      )}

      {showConfirmModal && (
        <ConfirmModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
}

export default TaskItem;
