import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Sept 2019 - Jan 2020",
      title: "Full Stack Web Developer",
      place: "Coding Bootcamp <Coding Dojo>",
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
      title: "IT Project manager",
      place: "EPAM Systems",
      desc1: "Managed and developed internal EPAM tools, focusing on platforms for staffing, finance, and people management.",
      desc2: "Defined project scope, objectives, and deliverables, establishing detailed project plans which included resource allocation and budget estimations .",
      desc3: "Collaborated effectively with internal teams to comprehend their requirements, expectations, and priorities. Kept stakeholders informed about project progress while actively seeking and integrating their feedback.",
      desc4: 'Managed project execution, tracked progress, maintained documentation, and promptly resolved implementation issues .',
      desc5: 'Facilitated regular meetings and presentations to present information, gather feedback, and ensure alignment with project objectives and deliverables.',
    },
    {
      yearRange: "Oct 2019- Feb 2021 ",
      title: "Operations Manager, Client: Google",
      place: "EPAM Systems",
      desc1: "Fostering partnerships with Google managers and gathering performance metrics.",
      desc2: 'Addressing financial inquiries and assisting in creating new roles.',
      desc3: "Overseeing Google's onboarding and offboarding processes and optimizing resource use.",
      desc4: "Implementing process improvements and refining EPAM's tools to enhance efficiency ."
    },
    {
      yearRange: "Nov 2018 - Sep 2019",
      title: "Project Manager",
      place: "TurboCourt",
      desc1: 'Maintained regular interaction with stakeholders, understanding requirements and managing project expectations.',
      desc2: 'Developed and executed comprehensive project plans, including task definition, resource allocation, and timeline estimation.',
      desc3: 'Monitored project progress, tracking KPIs, and regularly updating stakeholders.',
      desc4: 'Identified and addressed project issues, proposed corrective actions, and highlighted achievements in detailed reports.'
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
          <div className="col-md-5">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Education
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
                </div>
              ))}
              
          </div>
          {/* My Experience */}
          <div className="col-md-7">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Experience
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
                    {value.desc1 ? <li className="text-1" style={{color: '#C0C0C0'}}>{value.desc1}</li> : ''}
                     {value.desc2 ? <li className="text-1" style={{color: '#C0C0C0'}}>{value.desc2}</li> : ''}
                     {value.desc3 ? <li className="text-1" style={{color: '#C0C0C0'}}>{value.desc3}</li> : ''}
                     {value.desc4 ? <li className="text-1" style={{color: '#C0C0C0'}}>{value.desc4}</li> : ''}
                    {value.desc5 ? <li className="text-1" style={{color: '#C0C0C0'}}>{value.desc5}</li> : ''}
                    </ul>
                </div>
              ))}
              
          </div>
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


/*
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

   // My skills
   <h2
   className={
     "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
   }
 >
   Skills
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

*/