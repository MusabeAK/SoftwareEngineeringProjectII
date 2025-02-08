import React from "react";

const tasks = [
  { stage: "Data Collection", description: "Created Interview questions for both the general public and the eye specialists. Recorded and documented interview responses" },
  { stage: "Data Preprocessing", description: "formated data for analysis." },
  { stage: "Documentation", description: "Contributed on the SRS document (sections done:Introduction and Description) and also contributed on the final report (sections done:Results and discussion of results)" },
  { stage: "Project Research", description: "Reasearched about related projects that were previously done and how they were accomplised" },
  { stage: "Exploratory Analysis", description: "Correlation & Pattern Identification, Checked multicollinearity between features.Identifying trends and relationships.Using principal component analysis (PCA) for dimensionality reduction." },
  { stage: "Project Development", description: "Will be responsible for the development of the user interface that specialists will be interacting with" },
  { stage: "Testing & Evaluation", description: " Will work with the team to Validate model accuracy and performance." },
  { stage: "Deployment", description: " Will work with the team to Integrate the model into a production environment." }
];

const Precious = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Precious's Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="p-4 bg-gray-100 rounded-lg flex items-start space-x-4"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white font-bold rounded-full">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{task.stage}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Precious;
