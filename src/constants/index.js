import TechStore from "../assets/projects/TechStore.png";
import LorrySwap from "../assets/projects/LorrySwap.jpeg";
import Garden from "../assets/projects/Garden.png";
import Portfolio from "../assets/projects/Portfolio.png";
import MineResQ from "../assets/projects/Mine ResQ.png";
import Rover from "../assets/projects/Rover.jpeg";
import CodeSprint from "../assets/achievements/CodeSprint 8.jpg";
import Hackventure1 from "../assets/achievements/Hackventure1 1.jpg";
import Hackventure2 from "../assets/achievements/Hackventure1 2.jpg";
import HackX8 from "../assets/achievements/HackX 8.jpeg";
import SLIOT from "../assets/achievements/SLIOT 1.jpg";

export const HERO_CONTENT = `I'm a passionate full stack developer with a focus on backend development. I specialize in creating innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT1 = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Currently, I'm a 3rd-year undergraduate at the University of Moratuwa, pursuing a BSc (Hons) in Information Technology. My journey in development began with a deep curiosity about how things work, which has since evolved into a focused career in backend development, complemented by my interest in AI and machine learning.`;

export const ABOUT_TEXT2 = `With experience in a variety of technologies, including React, React Native, Flask, Node.js, SQL, and MongoDB, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments, enjoy solving complex problems, and am passionate about delivering high-quality solutions.`;


export const ABOUT_TEXT3 = `Outside of coding, I enjoy staying active, exploring new technologies, and  I have a keen interest in 3D modeling, which allows me to blend creativity with technology.`;

export const PROJECTS = [
  
  {
    title: "Garden Cleaning Tracker",
    subTitle:"Project from University of Moratuwa",
    year: "2024 (V1 completed)",
    image: Garden,
    description:
      "Garden Cleaning Tracker helps identify clean and unclean areas and facilitates checking and reviewing the cleanliness of those areas. This project includes a mobile app and an admin dashboard.",
    technologies: ["React", "React Native", "Tailwind CSS", "Nodejs"],
    role: "Mobile App Developer",
    link: "https://ecmm.uom.lk"
  },
  {
    title: "LorrySwap - Supply chain management system",
    subTitle:"2nd year Software Project",
    year: "2023 - 2024",
    image: LorrySwap,
    description:
      "This is a supply chain management system for connecting Manning market sellers, Farmers and Lorry Drivers.",
    technologies: ["React Native","React", "CSS", "Python Flask", "MSSQL", "SQLALCHEMY", "MUI"],
    role: "Full Stack Developer",
    link: "https://www.linkedin.com/posts/sampath-samaraweera_innovation-agritech-logistics-activity-7239186621483397120-xO1n?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "E-Commerce Website",
    subTitle:"Personal Project",
    year: "2024 (Ongoing)",
    image: TechStore,
    description:
      "An e-commerce website for technical equipment with features like product listing, shopping cart, payment gateway and user authentication.",
    technologies: ["React", "MUI", "CSS", "Nodejs", "MongoDB", "AWS", "Github Actions"],
    role: "Full Stack Developer",
    link: ""
  },
  {
    title: "Portfolio Website",
    subTitle:"Personal Project",
    year: "2024",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
    link: "https://main--sampathsamaraweera.netlify.app"
  },
  {
    title: "MineResQ - Gas detection system",
    subTitle:"Group Project",
    year: "2023",
    image: MineResQ,
    description:
      "This is a hardware device for detecting harmful gases and temperature in mines, featuring wireless connectivity for real-time monitoring both inside and outside the mine",
    technologies: ["Arduino","C", "Blender"],
    role: "",
    link: ""
  },
  {
    title: "ROVER 4.8",
    subTitle:"1st year Hardware Project",
    year: "2023",
    image: Rover,
    description:
      "This rover is capable of navigating within mines, capturing real-time video streams, and measuring gas values",
    technologies: ["Arduino","C", "Blender", "HTML", "CSS"],
    role: "",
    link: ""
  },
];

export const ACHIEVEMENTS = [
  
  {
    position: "1st Runners Up",
    competitionName:"HackVenture 1.0",
    year: "2024",
    image: Hackventure2,
    description:
      "Organized by AIESEC in University Of Kelaniya",
    team: "Team DevDynasty",
    link: ""
  },
  {
    position: "The Most Innovative Team",
    competitionName:"HackVenture 1.0",
    year: "2024",
    image: Hackventure1,
    description:
      "Organized by AIESEC in University Of Kelaniya.",
    team: "Team DevDynasty",
    link: ""
  },
  {
    position: "Top 15 Finalist",
    competitionName:"CodeSprint 8.0",
    year: "2024",
    image: CodeSprint,
    description:
      "Organized by the IEEE Student Branch of Informatics Institute of Technology.",
    team: "Team Sprite",
    link: "https://www.linkedin.com/posts/sampath-samaraweera_codesprint8-ieee-innovation-activity-7234974722256461825-eQ0C?utm_source=share&utm_medium=member_desktop"
  },
  {
    position: "Top 10 Finalist",
    competitionName:"SLIOT Challenge",
    year: "2024",
    image: SLIOT,
    description:
      "Organized by Department of Computer Science & Engineering, University of Moratuwa.",
    team: "Team Sprite",
    link: "https://www.linkedin.com/posts/sampath-samaraweera_sliot-top10finalists-teamsprite-activity-7183514719989739520-hZvn?utm_source=share&utm_medium=member_desktop"
  },
  {
    position: "Top 15 Finalist",
    competitionName:"HackX 8.0",
    year: "2023",
    image: HackX8,
    description:
      "Organized by Department of Industrial Management,University of Kelaniya.",
    team: "Team Sprite",
    link: "https://www.linkedin.com/posts/sampath-samaraweera_hackx-teamsprite-innovationjourney-activity-7143450342892945408-CimL?utm_source=share&utm_medium=member_desktop"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
