import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const handleTaskClick = (index) => {
    setSelectedTaskIndex(selectedTaskIndex === index ? null : index);
  };

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onClick={() => handleTaskClick(index)}
            isExpanded={selectedTaskIndex === index}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask} // Ensure this prop is passed correctly
            taskIndex={index}
          />
        ))
      ) : (
        <p>No tasks available. Add a task above.</p>
      )}
    </div>
  );
}

export default TaskList;
