import React, { useState } from "react";
import DocumentItem from "./DocumentItem";
import mammoth from "mammoth";

function Document() {
  const [documents, setDocuments] = useState([]); // State for uploaded documents
  const [file, setFile] = useState(null); // State for currently selected file

  // Function to handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file.type === "application/pdf") {
      // Handle PDFs with pdfjs-dist
    } else if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      reader.onload = function (event) {
        mammoth
          .extractRawText({ arrayBuffer: event.target.result })
          .then((result) => {
            const text = result.value;
            const firstFewWords = text.split(" ").slice(0, 10).join(" ");
            const newDoc = {
              title: file.name,
              content: firstFewWords,
              fullContent: text,
              type: "docx",
            };
            setDocuments([newDoc, ...documents]);
          })
          .catch((err) => console.log(err));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // Function to add document to the list
  const handleAddDocument = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        const firstFewWords = fileContent.split(" ").slice(0, 10).join(" "); // Extract first few words
        const newDoc = {
          title: file.name,
          content: firstFewWords,
          fullContent: fileContent,
        };
        setDocuments([newDoc, ...documents]); // Add new document to the beginning of the list
        setFile(null); // Clear the input
      };
      reader.readAsText(file); // Reads the file content
    }
  };

  // Function to "delete" a document (removes from view only)
  const handleDelete = (title) => {
    const updatedDocuments = documents.filter((doc) => doc.title !== title);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="document-page">
      <h2>Upload and Manage Documents</h2>

      {/* File input and upload button */}
      <div className="upload-section">
        <input
          type="file"
          accept=".txt, application/pdf, application/msword"
          onChange={handleFileChange}
        />
        <button onClick={handleAddDocument}>Upload Document</button>
      </div>

      {/* Document list */}
      <div className="documents-list">
        {documents.map((doc, index) => (
          <DocumentItem
            key={index}
            title={doc.title}
            description={doc.content}
            fullContent={doc.fullContent}
            onDelete={() => handleDelete(doc.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Document;
