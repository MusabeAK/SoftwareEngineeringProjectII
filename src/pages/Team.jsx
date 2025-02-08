import React from "react";
import { Link } from "react-router-dom";
import collins from "../assets/collins.jpeg";
import precious from "../assets/precious.jpeg";
import karim from "../assets/karim.jpeg";
import monica from "../assets/monica.jpeg";

const teamDescription = {
  title: "Our Team",
  description:
    "We are passionate Software Engineering students from Makerere University, driven by innovation and technology. Our diverse skills and shared vision for improving healthcare through artificial intelligence unite us in this groundbreaking project.",
};

const teamMembers = [
  {
    name: "Kato Collins",
    position: "Machine Learning Lead",
    about:
      "Specializing in deep learning and computer vision with a focus on medical image processing. Passionate about applying AI in healthcare...",
    image: collins,
    page: "/collins"
  },
  {
    name: "Kyomuhendo Precious",
    position: "Frontend Developer",
    about:
      "Expert in React and modern web technologies. Dedicated to creating intuitive and accessible user interfaces for medical applications...",
    image: precious,
    page: "/precious"
  },
  {
    name: "Musabe Abdul Karim",
    position: "Backend Developer",
    about:
      "Experienced in building scalable APIs and managing data pipelines. Focused on creating robust systems for medical data processing...",
    image: karim,
    page: "/karim"
  },
  {
    name: "Muyama Monica",
    position: "Research & Documentation Lead",
    about:
      "Skilled in data analysis and technical documentation. Passionate about ensuring our research meets the highest academic standards...",
    image: monica,
    page: "/monica"
  },
];

const TeamPage = () => {
  return (
    <main className="mx-auto w-full lg:w-3/4 px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {teamDescription.title}
        </h1>
        <div className="max-w-2xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            {teamDescription.description}
          </p>
        </div>
      </section>

      <section className="space-y-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-8 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover border-4 border-teal-100"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {member.name}
              </h2>
              <h3 className="text-lg font-semibold text-teal-600 mb-4">
                {member.position}
              </h3>
              <p className="text-gray-600 mb-4 max-w-2xl">{member.about}</p>
              <Link 
                to={member.page} 
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Read Tasks
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TeamPage;
