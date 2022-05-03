import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Mid-Level Software Developer",
    years: "2021 - 2022",
    description: "Developed the company's ERP framework. Architected and aided in the development of HTML5, MVC5 based SaaS solution. Created a cloud base microservice framework for rapid application development with standardized UI. Analyzed, debugged, and ﬁxed crash issues, memory leaks, and performance issues.",
    language: "Laravel, React, Boostrap and Tailwind",
    content:
      "Afrinict limited.",
  },
  {
    id: 2,
    title: "Front-end Develoer",
    years: "2020 - 2021",
    description: "I was given a task remotely in New Jersey, US. The company operates on blockchain. I used React.js, to complement the back-end which was built with Python, and Solidity. Worked closely with Product Managers, Investors, UXteam, and business managers to strategize product design and implementation.",
    language: "React JS and Figma",
    content:
      "Ellani Software Solution.",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    years: "2019 - 2020",
    description: "Acted as a team lead for a group consisting of 5 Members. Accessed pull requests and code quality reviews. Liaised With clients for creative requests. Drafted diﬀerent approved development plans on request, to meet the demands of the organizations. Developed frontend using Vue.js Components, Developed backend using Laravel.",
    language: "ReactJs, and Laravel",
    content:
      "Chrome Softek.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Wordpress Developer",
    years: "2018 - 2019",
    description: "Designed Dynamic, database-driven internal website. Answer to 500+ requests from the Candidates/Students per day. Developed the company's sub-company website, using sub-domain. Architected and aided in the development of the Learning Management  solution. Built a learning platform, that allows study online, and write exams online.",
    language: "PHP, WordPress",
    content:
      "Acemedix Academy .",
  },
  {
    id: 2,
    title: "Wordpress Developer",
    years: "2017 - 2018",
    description: "Proficient and creative WordPress developer with a strong history in website management and development. Experienced in SEO and PPC campaign creation. Expert in all aspects of WordPress website creation, including design, plug-ins, and implementation. designd  website for clients under this company using Elemntor and WPBakery ",
    language: "PHP, WordPress",
    content:
      "TMR Concept.",
  },
  {
    id: 3,
    title: "Front-End/Customer Support",
    years: "2016 - 2017",
    description: "Manage website development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility. Work closely with programmers and clients to meet project requirements, goals, and desired functionality. Educate numbers of client on how to operate the software, more of customer service",
    language: "ReactJS, Laravel",
    content:
      "Moji Software Limited.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
