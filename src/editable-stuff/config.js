// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anmol",
  middleName: "",
  lastName: "Verma",
  message: " I Code :) Quotes not found 404 ;) ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AnmolVerma404",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anmolverma404/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/anmolverma404",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/anmolverma.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/anmolverma.png"),
  imageSize: 375,
  message:
    "Hey there! I'm Anmol Verma, a graduate from Vellore Institute of Technology Bhopal, where I spent 2020-2024 learning the art of turning coffee into code. I majored in Computer Engineering, which is a fancy way of saying I spend a lot of time convincing computers to do what I want (and occasionally begging them to cooperate). Currently, I'm rocking the software engineering scene at rtCamp. When I'm not buried under lines of code, you can find me tinkering with projects, dreaming up the next big thing, or plotting ways to convince my computer to clean up its own bugs.",
  resume: "https://drive.google.com/file/d/1HcHY8d4PNzcmr0E2IwjAhSQqJxHSsyk-/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Pinned Repository",
  gitHubUsername: "AnmolVerma404", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["TicketOps","Healthy-HearTechs","MapMyPath","Data-Structures-and-Algorithms"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/anmolverma.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/anmolverma.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 70 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 80 },
    { name: "Solidity", value: 60 },
    { name: "DevOps", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Consistency", value: 100 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "anmolverma102002@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
