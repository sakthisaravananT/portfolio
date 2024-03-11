import css from "../Assests/css.jpg";
import java from "../Assests/java.png";
import html from "../Assests/html.jpg";
import machine from "../Assests/machine learning.png";
import reactjs from "../Assests/react js.png";
import mongodb from "../Assests/mongodb.jpg";
import javascript from "../Assests/javascript.jpg";
import web from "../Assests/web.png";
import python from "../Assests/python.png";
import Machine from "../Assests/machine.jpg";
import reacr from "../Assests/reacr.png";
import git from "../Assests/git.jpg";
import pro1 from "../Assests/pro1.jpg";
import pro2 from "../Assests/pro2.png";
import pro3 from "../Assests/pro3.jpg";

const services = [
    {
      title: "web Developer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: reacr,
    },
    {
      title: "Machine Learning Engineer",
      icon: machine,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React Js",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Machine Learning",
      icon: Machine,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const projects = [
    {
      name: "House Price Prediction",
      description:
        "Chennai House Price Prediction using Machine Learning",
      tags: [
        { name: "Typescript", color: "blue-text-gradient" },
        { name: "Angular", color: "green-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
      ],
      image: pro1,
      source_code_link: "",
      source_deploy_link: "",
    },
    {
        name: "Chat Application",
        description: "Made a Interactive chatbot application for Hackathon",
    
    tags: [
        { name: "React js", color: "blue-text-gradient" },
        { name: "Tailwind", color: "green-text-gradient" },
        { name: "Css", color: "pink-text-gradient" },
        
    ],
    image: pro2,
    source_code_link: "",
    source_deploy_link:"",
},
{
    name: "Portfolio",
    description:"Made a Portfolio using React Js",

    tags: [

        { name: "React js", color: "blue-text-gradient" },
        { name: "Node js", color: "green-text-gradient" },
        { name: "Tailwind", color: "pink-text-gradient" },
        

        
    ],
    image: pro3,
    source_code_link:"",
    source_deploy_link:"",
},

];
export {services, technologies, projects};
  