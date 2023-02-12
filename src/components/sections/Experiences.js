import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "San Francisco State University",
    years: "2016 - 2020",
    content:
      "Bachelor's Of Science In Computer Science ",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full Stack Software Engineer - Apple",
    years: "March 2022 - Present",
    content:
      "Work with React and Django to implement web application features by creating and utilizing existing API's. Research and implement various React packages to frontend web application. Write Django unit tests for API implementations.",
  },
  {
    id: 2,
    title: "Junior Software Developer - Cloud Peak Law",
    years: "May 2021 - Dec 2021",
    content:
      "Work with Python, Django, and Vue to maintain and add responsive features to web application. Projects include implementing an edit custom email modal allowing users to edit their custom email before sending over to leads.",
  },
  {
    id: 3,
    title: "Software Engineer Intern - Sunshine Life & Health Advisors",
    years: "Sept 2020 - Dec 2020",
    content:
      "Design and create order form and clock in web applications using React and Django. Research and implement open sourced chat boxes to company's Wordpress website.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6 work">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6 education">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
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
