import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Project Planning and Review",
      desc: "Work with stakeholders to define project scope, objectives, and requirements. Develop a detailed project plan, including timelines, milestones, and resource allocation.",
      icon: "fas fa-desktop",
    },
    {
      name: "Task Assignment",
      desc: "Assign tasks to team members based on their expertise and availability. Monitor task progress and ensure that deadlines are met.",
      icon: "fa-solid fa-list-check",
    },
    {
      name: "Team Management",
      desc: "Build and lead a project team, ensuring that each member understands their role and responsibilities. Provide guidance and support to team members throughout the project lifecycle.",
      icon: "fa-solid fa-people-group"
    },
    {
      name: "Risk Management",
      desc: "Identify potential risks and issues that could impact project success. Develop risk mitigation strategies and contingency plans.",
      icon: "fas fa-clone",
    },
    {
      name: "Budget Management",
      desc: "Create and manage the project budget. Track expenses, ensure cost-effectiveness, and justify budget deviations when necessary.",
      icon: "fa-regular fa-rectangle-list",
    },
    {
      name: "Communication",
      desc: "Facilitate clear and effective communication among team members, stakeholders, and clients. Provide regular project updates and address any concerns or questions.",
      icon: "fa-solid fa-tty",
    },
    {
      name: "Project Management Software Tools",
      desc: "Jira, Asana, Monday, Microsoft Project, Google Suite, Github",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    {
      name: "Programming Languages & Frameworks",
      desc: "JavaScript, CSS3, HTML5, ReactJS, Redux, SQL, Bootstrap, SQL",
      icon: "fa-solid fa-code-merge",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
