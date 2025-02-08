import React from "react";

const Documents = () => {
  const pdfFiles = [
    "project_proposal.pdf",
    "Pathological Myopia report.pdf",
    "Interview questions.pdf",
    "Questionnaire.pdf",
  ];

  const handleViewDocument = (file) => {
    const filePath = `/pdf/${file}`;
    
    if (file.toLowerCase().endsWith('.pdf')) {
      window.open(filePath, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = filePath;
      link.download = file;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Available Documents
      </h2>
      <ul className="space-y-3">
        {pdfFiles.map((file, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow"
          >
            <span className="text-gray-800 font-medium">{file}</span>
            
            <div className="flex gap-2">
              <button
                onClick={() => handleViewDocument(file)}
                className="bg-teal-600 text-white px-3 py-1 rounded-md hover:bg-teal-700 transition"
              >
                View
              </button>
              
              <a
                href={`/pdf/${file}`}
                download
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;