import React from "react";

function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>
          Are you sure you want to <strong>Parmanently</strong> delete this
          task?
        </p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="cancel-button">
            Yes
          </button>
          <button onClick={onCancel} className="add-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
