import React from "react";

const tasks = [
  { stage: "Data Collection", description: "Gathered relevant datasets and research materials." },
  { stage: "Data Preprocessing", description: "Cleaned and formatting data for analysis." },
  { stage: "Documentation", description: "Contributed on the SRS (section done: Other nonfunctional Requirements) and the final report ( sections done: Recommendations and Conclusion)" },
  { stage: "Exploratory Analysis", description: "Data Visualisation, Plotted histograms, scatter plots, and bar charts. Used box plots to detect outliers. Creating correlation heatmaps to analyze relationships between variables." },
  { stage: "Project Development", description: "Backend development of the project" },
  { stage: "Testing & Evaluation", description: "Will work with the team to Validate model accuracy and performance." },
  { stage: "Deployment", description: "Will work with the team to Integrate the model into a production environment." }
];

const Karim = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Karim's Tasks</h2>
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

export default Karim;
