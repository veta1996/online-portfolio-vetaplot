import React from "react";
import resumeFile from "../documents/Veta_Plotnikova_TPM.pdf";

const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Veta Plotnikova,</span> Technical Project Manager
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            Experienced Project Manager with a strong foundation in software engineering. Skilled in leading complex projects from start to finish. Committed to stakeholder satisfaction, adept at requirements gathering, and experienced in diverse project management methodologies and tools. Proficient in several programming languages and frameworks            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Seeking a Technical Project/Program Manager role to grow my career and contribute to the company’s goals.

            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:veta.plotnikova@gmail.com">veta.plotnikova@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Tel number:</span>
                  +1(415)316-89-23
                </li>
  
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>San Diego,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
       
      </div>
    </section>
  );
};

export default AboutUs;

/*

 
 <div
 className={
   "brands-grid separator-border mt-5 " +
   (darkTheme ? "separator-border-light" : "")
 }
>
 <div className="row">
   <div className="col-6 col-md-3">
     <div className="featured-box text-center">
       <h4
         className={
           "text-12  mb-0 " +
           (darkTheme ? "text-white-50" : "text-muted")
         }
       >
         <span>10</span>+
       </h4>
       <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
         Years Experiance
       </p>
     </div>
   </div>
   <div className="col-6 col-md-3">
     <div className="featured-box text-center">
       <h4
         className={
           "text-12  mb-0 " +
           (darkTheme ? "text-white-50" : "text-muted")
         }
       >
         <span>250</span>+
       </h4>
       <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
         Happy Clients
       </p>
     </div>
   </div>
   <div className="col-6 col-md-3">
     <div className="featured-box text-center">
       <h4
         className={
           "text-12  mb-0 " +
           (darkTheme ? "text-white-50" : "text-muted")
         }
       >
         <span>650</span>+
       </h4>
       <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
         Projects Done
       </p>
     </div>
   </div>
   <div className="col-6 col-md-3">
     <div className="featured-box text-center">
       <h4
         className={
           "text-12  mb-0 " +
           (darkTheme ? "text-white-50" : "text-muted")
         }
       >
         <span>38</span>
       </h4>
       <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
         Get Awards
       </p>
     </div>
   </div>
 </div>
</div>
*/