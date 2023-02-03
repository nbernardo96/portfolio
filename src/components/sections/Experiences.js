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
      "Actively implement new features by utilizing and creating API's using Django. Create simple, clean, user-friendly frontend designs for admin interactions using React.",
  },
  {
    id: 2,
    title: "Junior Software Developer - Cloud Peak Law",
    years: "May 2021 - Dec 2021",
    content:
      "Actively troubleshoot bugs and add features to site using Django and Vue. Features include implementing an edit custom email modal allowing users to edit their custom emails before sending over to leads.",
  },
  {
    id: 3,
    title: "Software Engineer Intern - Sunshine Life & Health Advisors",
    years: "Sept 2020 - Dec 2020",
    content:
      "Contribute to the design and creation of order form and clock in websites using React and Django. Research various open source chat boxes to be implemented to company's website.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
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
