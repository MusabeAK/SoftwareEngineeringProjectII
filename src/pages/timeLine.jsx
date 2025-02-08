import React from 'react';
import { CheckCircle, Clock, Circle, Calendar } from 'lucide-react';

const Timeline = () => {
  const activities = [
    { 
      name: 'Data Collection', 
      status: 'finished',
      description: 'Gathering and collecting all necessary project data',
      startDate: '2024-06-15',
      endDate: '2024-07-01'
    },
    { 
      name: 'Data Preprocessing', 
      status: 'finished',
      description: 'Cleaning and preparing data for analysis',
      startDate: '2024-08-01',
      endDate: '2024-9-15'
    },
    { 
      name: 'Documentation', 
      status: 'finished',
      description: 'Creating comprehensive project documentation',
      startDate: '2024-10-15',
      endDate: '2024-12-15'
    },
    { 
      name: 'Exploratory Analysis', 
      status: 'in-progress',
      description: 'Analyzing and understanding data patterns',
      startDate: '2025-01-01',
      endDate: '2025-02-28'
    },
    { 
      name: 'Project Development', 
      status: 'in-progress',
      description: 'Building core project features and functionality',
      startDate: '2025-02-15',
      endDate: '2025-05-30'
    },
    { 
      name: 'Testing & Evaluation', 
      status: 'not-started',
      description: 'Validating project functionality and performance',
      startDate: '2025-05-30',
      endDate: '2025-06-02'
    },
    { 
      name: 'Deployment', 
      status: 'not-started',
      description: 'Launching the project to production environment',
      startDate: '2025-06-03',
      endDate: '2025-06-04'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'finished':
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-8 h-8 text-blue-500 animate-pulse" />;
      default:
        return <Circle className="w-8 h-8 text-gray-300" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'finished':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'finished':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Not Started';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Project Timeline
      </h1>
      
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="relative">
            {index !== activities.length - 1 && (
              <div className="absolute left-4 top-12 w-0.5 h-20 bg-gray-200" />
            )}
            
            <div className="flex items-start gap-6">
              <div className="shrink-0">
                {getStatusIcon(activity.status)}
              </div>
              
              <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {activity.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(activity.status)}`}>
                    {getStatusText(activity.status)}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  {activity.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {formatDate(activity.startDate)} - {formatDate(activity.endDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;