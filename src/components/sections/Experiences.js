import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Mid-Level Software Developer",
    years: "2021 - 2022",
    content:
      "Afrinict limited.",
  },
  {
    id: 2,
    title: "Software Engineer",
    years: "2020 - 2021",
    content:
      "Ellani Software Solution.",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    years: "2019 - 2020",
    content:
      "Chrome Softek.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Wordpress Developer",
    years: "2018 - 2019",
    content:
      "Acemedix Academy .",
  },
  {
    id: 2,
    title: "Wordpress Developer",
    years: "2017 - 2018",
    content:
      "TMR Concept.",
  },
  {
    id: 3,
    title: "Front-End/Customer Support",
    years: "2016 - 2017",
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
