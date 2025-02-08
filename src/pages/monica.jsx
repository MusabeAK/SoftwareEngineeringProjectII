import React from "react";

const tasks = [
  { stage: "Data Collection", description: "Conducted a physical interview with an eye specialist at makerere University Hospital" },
  { stage: "Data Preprocessing", description: "Conducted data analysis for the collected data." },
  { stage: "Documentation", description: "Contributed on the SRS (section done: System Features) and the final report ( sections done: Introduction and literature review)" },
  { stage: "Project Research", description: "Researched how related projects perform in African countries " },
  { stage: "Exploratory Analysis", description: "Summary statics, computed mean, medium, mode, standard deviation and identified outliers using box plots." },
  { stage: "Project Development", description: "Will be reponsible to optimize the trained model." },
  { stage: "Testing & Evaluation", description: "Will work with the team to Validate model accuracy and performance." },
  { stage: "Deployment", description: "Will work with the team to Integrate the model into a production environment." }
];

const Monica = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Monica's Tasks</h2>
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

export default Monica;
