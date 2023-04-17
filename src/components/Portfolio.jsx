import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import mainHouzezImage from '../images/houzez/image1.png'
import secondHouzezImage from '../images/houzez/image2.png'
import thirdHouzezImage from '../images/houzez/image3.png'
import fourthHouzezImage from '../images/houzez/image4.png'
import image11 from '../images/houzez/image11.png'
import image12 from '../images/houzez/image12.png'
import image14 from '../images/houzez/image14.png'
import image15 from '../images/houzez/image15.png'
import image16 from '../images/houzez/image16.png'
import image17 from '../images/houzez/image17.png'
import image18 from '../images/houzez/image18.png'



const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

 

  const projectsData = [
    {
      title: "The Houzez",
      client: 'The Houzez',
      projectInfo: "It is a real estate website with stunning listing section, custom categories, responsive design, listings cards, rent and sale pages, and most importantly listing pages where you can see the map and image slider. Also Firebase auth for complete authentication and ability to sign up or sign in using username and password and Google oAuth.",
      technologies: "ReactJs, HTML5, CSS3, Firebase 9, Tailwind CSS 3",
      industry: "Real Estate",
      date: "March, 2023",
      url: {
        name: "Click here",
        link: "https://realtor-app-lyart.vercel.app/",
      },
     
      thumbImage: `${mainHouzezImage}`,
      sliderImages: [
        `${secondHouzezImage}`,
        `${thirdHouzezImage}`,
        `${fourthHouzezImage}`
      ]
    },
    {
      title: "BnbAir",
      projectInfo: "It is a Airbnb clone website with listing section, custom categories, responsive design, listings cards, rent pages, where you can choose the dates and proceed with reservation. Also Firebase auth for complete authentication and ability to sign up or sign in using username and password and Google oAuth.",
      client: "Bnbair",
      technologies: "JavaScript, CSS, HTML, ReactJS, Redux",
      industry: "Online marketplace for short-term homestays and experiences",
      date: "November, 2022",
      url: {
        name: "Click here",
        link: "https://airbnb2-rho.vercel.app/",
      },
      
      thumbImage: `${image11}`,
      sliderImages: [
        `${image12}`,
        `${image14}`,
        `${image15}`,
        `${image16}`,
        `${image17}`,
        `${image18}`,
      ],
    },
    
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-12 col-lg-6 filter-item " 
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
