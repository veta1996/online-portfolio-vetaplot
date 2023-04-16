import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web Design",
      desc: "Designing the layout, visual design, and functionality of the website or application that users interact with.",
      icon: "fas fa-desktop",
    },
    {
      name: "Coding",
      desc: "Using programming languages such as HTML, CSS, and JavaScript to create responsive designs that work across different devices and browsers.",
      icon: "fas fa-code",
    },
    {
      name: "ReactJS development",
      desc: "Responsible for creating user interfaces for web applications using the ReactJS library.",
      icon: "fa-brands fa-react"
    },
    {
      name: "Application testing",
      desc: "Testing, debugging, and optimizing the performance of the website or application.",
      icon: "fas fa-clone",
    },
    {
      name: "Redux",
      desc: "As a ReactJS developer, I implement business logic using Redux. This involves managing the application state, dispatching actions, and handling updates to the state.",
      icon: "fa-regular fa-rectangle-list",
    },
    {
      name: "CSS frameworks",
      desc: "Using various frameworks such as Bootstrap, Tailwind, Material-UI, Styled Components.",
      icon: "fa-brands fa-css3",
    },
    {
      name: "Git",
      desc: "Using Git to manage the codebase, collaborate with other developers, and deploy my code to production.",
      icon: "fa-brands fa-github",
    },
    {
      name: "API",
      desc: "Often working with APIs to fetch data from servers or send data to servers. This involves using tools like Axios or Fetch to make HTTP requests and handle responses.",
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
