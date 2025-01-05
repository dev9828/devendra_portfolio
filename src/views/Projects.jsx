import React, { useContext } from "react";
import Card from "../components/Card"; // Using Card as per your requirement
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Example project data
  const projectData = [
    {
      imgSrc: "https://cdn.dribbble.com/userupload/17888812/file/original-69c1bdc74370b55d14fe57e3888c55a4.png?resize=1024x768&vertical=center",
      title: "Student Management System ",
      description: "A full-stack web application developed using Angular for the frontend and Spring Boot with JPA (Java Persistence API) for the backend. This application is designed to manage student information, providing functionalities such as adding, updating, viewing, and deleting student records. The Angular frontend offers a user-friendly interface for interacting with the system, while the Spring Boot backend handles business logic and data persistence. The integration of JPA facilitates efficient database operations, ensuring seamless communication between the application and the database.",
      repoLink: "https://github.com/dev9828/Sms_fullstack_Angular_spring/tree/master/Sms_Angular_Spring_Jpa",
      //sourceLink: "https://example.com/project1",
      techIcons: [
        { icon: "logos:angular-icon" },         // Angular
    { icon: "logos:spring-icon" },         // Spring Boot
    { icon: "vscode-icons:file-type-java" }, // Java
    { icon: "logos:mysql" }  

      ],
    },
    {
      imgSrc: "https://cdn.dribbble.com/users/1656786/screenshots/16797112/media/bb5945f35e86981f403ed0138b3b39c0.png?format=webp&resize=320x240&vertical=center",
      title: "Coursera - A Tutorial App",
      description: "This is a full-stack web application designed to manage courses and tutorials efficiently. The project uses React for the frontend, providing a dynamic and user-friendly interface for users to view, create, update, and delete courses. On the backend, Spring Boot handles business logic and integrates with a MySQL database for reliable data storage and management. The system offers secure user authentication, CRUD operations, and a seamless connection between the frontend and backend to ensure a smooth user experience",
      repoLink: "https://github.com/dev9828/Course_Fullstack_React_Spring/tree/main/coursera",
      //sourceLink: "https://example.com/project2",
      techIcons: [
        { icon: "akar-icons:react-fill" },
  { icon: "simple-icons:springboot" },
  { icon: "logos:mysql" },
  { icon: "logos:java" },
  { icon: "akar-icons:html-fill" },
  { icon: "akar-icons:css-fill" },
  { icon: "akar-icons:javascript-fill" },
  { icon: "mdi:api" }
      ],
    },
    {
      imgSrc: "https://cdn.dribbble.com/userupload/15715014/file/original-a8e02a12c1ee5f3a34e03170623c2e92.png?format=webp&resize=320x240&vertical=center",
      title: "ClimaWeb",
      description: "ClimaWeb Weather App is a cross-platform mobile application developed using Flutter. The app provides real-time weather updates for the user's current location and allows searching for weather details of other cities. It integrates the OpenWeatherMap API for fetching accurate weather data and features a clean, responsive UI designed to enhance the user experience.",
      repoLink: "https://github.com/dev9828/ClimaWeb_Weather_app",
      //sourceLink: "https://example.com/project3",
      techIcons: [
        { icon: "simple-icons:flutter" },
    { icon: "simple-icons:dart" },
    { icon: "simple-icons:openweathermap" },,
      ],
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap gap-8">
          {projectData.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              sourceLink={project.sourceLink}
              techIcons={project.techIcons}
            />
          ))}
        </div>
        <a
          href="#more-projects"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-8"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
