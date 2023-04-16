import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Sept 2020 - Jan 2021",
      title: "Full Stack Web Developer",
      place: "Coding Bootcamp <Coding Dojo>",
    },
    {
      yearRange: "June - Sept 2016",
      title: 'Software QA Tester',
      place: "Portnov Computer School",
    },
    {
      yearRange: "2013 - 2016",
      title: "Linguist. Teacher of 2 foreign languages",
      place: "Minsk State Linguistic University",
    },
    
   
  ];

  const experienceDetails = [
    {
      yearRange: "Mar 2021 - Present  ",
      title: "Front-End Developer",
      place: "EPAM Systems",
      desc1: "Developed and maintained React JS web applications for the internal company tools and portals, including bug fixes, enhancements, and new features",
      desc2: 'Strong web development skills with HTML/HTML5, CSS/CSS3, Less/Sass, Bootstrap, Material UI, JavaScript (ES6/ES5), ReactJS, Redux, AJAX, JSON',
      desc3: 'Creating responsive web pages and flows that can be viewed on mobile as well as a desktop by using Media Queries, CSS Grid Layout, Flexbox, and Bootstrap',
      desc4: 'Familiarity with RESTful APIs development and deployment',
      desc5: 'Working knowledge of Linux, Windows, Docker, AWS, Microsoft Azure, and other platforms',
      desc6: ' Assisted in troubleshooting software interface and debugging of application codes'
    },
    {
      yearRange: "Oct 2018- Feb 2021 ",
      title: "Senior Operation Manager",
      place: "EPAM Systems",
      desc1: "Communicate customer issues with the operations team and devise ways of improving the customer experience, including resolving problems and complaints.",
      desc2: 'Analyze process workflow, employee and space requirements, and equipment layout; implement changes.',
      desc3: 'Maintain a safe and healthy work environment by establishing, following, and enforcing standards and procedures.'
    },
    {
      yearRange: "Mar 2017- Sep 2018",
      title: "Software QA Engineer",
      place: "Intresys Inc",
      desc1: 'Designed, developed, created, and executed test plans and cases based on software requirements and technical understanding of product architecture.',
      desc2: 'Logged and assigned bugs, keeping track of the defect status.',
      desc3: 'Made black box testing techniques such as GUI, Functional testing, Interruption testing, System Testing, and UAT.',
      desc4: 'Tested web-based application on Windows/Mac OS and hybrid mobile applications.'
      },
    {
      yearRange: "Aug 2016- Feb 2017",
      title: "Software QA Engineer",
      place: "QAUBER",
      desc1: 'Intership'
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Python",
      percent: 30,
    },
    {
      name: "Tailwind",
      percent: 70,
    },
    {
      name: "Redux",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
    {
      name: "Git",
      percent: 90,
    },
  ];
  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <ul className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    
                  </ul>
                </div>
              ))}
              
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                    <ul>
                    {value.desc1 ? <li className="text-1">{value.desc1}</li> : ''}
                     {value.desc2 ? <li className="text-1">{value.desc2}</li> : ''}
                     {value.desc3 ? <li className="text-1">{value.desc3}</li> : ''}
                     {value.desc4 ? <li className="text-1">{value.desc4}</li> : ''}
                    {value.desc5 ? <li className="text-1">{value.desc5}</li> : ''}
                    </ul>
                </div>
              ))}
              
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
