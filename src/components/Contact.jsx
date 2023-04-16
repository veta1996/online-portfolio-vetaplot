import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  

  return (
    <section
      id="contact"
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
            Contact
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-5 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Contact Information
            </h2>
      
            
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-fax" />
              </span>
              +1 (415) 3168923
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              veta.plotnikova@gmail.com
            </p>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Follow Me
            </h2>
            <ul
              className={
                "social-icons justify-content-center justify-content-md-start " +
                (darkTheme ? "social-icons-muted" : "")
              }
            >
              <li className="social-icons-linkedin">
                <Tooltip text="LinkedIn" placement="top">
                  <a
                    href="https://www.linkedin.com/in/veta-plotnikova/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-linkedin"/>
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href="https://www.facebook.com/profile.php?id=100002904283173"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </Tooltip>
              </li>
              
              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="https://github.com/veta1996"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          {/* contact form */}
          <div className="col-md-7 col-xl-8 order-0 order-md-1">
            <h2
              className={
                "mb-3 text-5 text-uppercase text-center text-md-start " +
                (darkTheme ? "text-white" : "")
              }
            >
              Send me email
            </h2>
            <form
              className={darkTheme ? "form-dark" : ""}
              id="contact-form"
              action="https://formsubmit.co/veta.plotnikova@gmail.com" method="POST"
              ref={form}
              //onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="user_name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Tell me more about your needs........"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

