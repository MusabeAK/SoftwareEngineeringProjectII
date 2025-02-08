import React from "react";

const Documents = () => {
  const pdfFiles = [
    "project_proposal.docx",
    "Pathological Myopia report.pdf",
    "interview questions.docx",
    "Questionnaire.docx",
  ];

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Available Documents</h2>
      <ul className="space-y-3">
        {pdfFiles.map((file, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow">
            <a
              href={`/pdf/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              {file}
            </a>
            <a
              href={`/pdf/${file}`}
              download
              className="bg-teal-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
