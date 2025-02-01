import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { FaTrash } from "react-icons/fa"; // Make sure you're importing the icon package

function DocumentItem({ title, description, fullContent, onDelete, type }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="document-item">
      <div className="document-details">
        <h3>{title}</h3>
        {type === "pdf" ? (
          <Document file={fullContent}>
            <Page pageNumber={1} />
          </Document>
        ) : (
          <p>{showMore ? fullContent : description}</p>
        )}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <FaTrash className="delete-icon" onClick={onDelete} />
    </div>
  );
}

export default DocumentItem;
