import React, { useState } from 'react';
import { MdDeleteSweep, MdEdit, MdSave } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.taskName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    editTask(task.taskName, editText);
  };

  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        {isEditing ? (
          <input className="editt"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <p>{task.taskName}</p>
        )}
      </div>
      <div className="icons">
        {isEditing ? (
          <MdSave className="save-icon" onClick={handleSaveClick} />
        ) : (
          <MdEdit className="edit-icon" onClick={handleEditClick} />
        )}
        <MdDeleteSweep className="delete-icon" onClick={() => deleteTask(task.taskName)} />
      </div>
    </li>
  );
};

export default TaskItem;
