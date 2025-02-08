import React from "react";

const tasks = [
  { stage: "Data Collection", description: "Created Questionners for both the general public and the eye specialists. Conducted a physical interview with an eye specialist at makerere University Hospital" },
  { stage: "Data Preprocessing", description: "Cleaned and formatted data for analysis." },
  { stage: "Documentation", description: "Contributed on the SRS (section done:External interface Requirement) and the final report (sections done:Methodology and challenges)" },
  { stage: "Project Research", description: "Researched about different pathological myopia data sets and there performance" },
  { stage: "Exploratory Analysis", description: "Data cleaning, handled missing values, removed duplicates and corrected incorrect or inconsistent values." },
  { stage: "Project Development", description: "Responsible for model(yolo) training and testing" },
  { stage: "Testing & Evaluation", description: "Will work with the team to Validate model accuracy and performance." },
  { stage: "Deployment", description: "Will work with the team to Integrate the model into a production environment." }
];

const Collins = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Collins's Tasks</h2>
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

export default Collins;
