import React from "react";
import { Row, Col } from "react-bootstrap";
import exam2 from "../../images/portofoli-exam-2.png";
import semesterproject2 from "../../images/portofoli-semester-project-2.png";
import ecom from "../../images/portofoli-ecom-js-framework.png";
import sosialmeets from "../../images/portofoli-vanilla-js-sosialmeets.png";
import blog from "../../images/portofoli-3-blog.png";
import museum from "../../images/portofoli-2-museum.png";
import website from "../../images/home-icon.png";
import github from "../../images/github-logo.png";

function Portfolio() {
  return (
    <div>
      <h1 className="text-center mt-5 mb-2">Portfolio</h1>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <div className="image-wrapper mb-4">
            <a href="https://gregarious-medovik-61d889.netlify.app/">
              <img src={exam2} alt="" className="img-fluid image-item" />
            </a>
          </div>
          <div>
            <h3>My Last Exam 2</h3>
            <p>
              Building a modern frontend accommodation booking application using
              official API.
            </p>
            <small>
              <p className="m-0">React</p>
            </small>
            <small>
              <p className="m-0">SASS</p>
            </small>
            <small>
              <p className="mt-0 mb-1">Bootstrap</p>
            </small>
            <a href="https://gregarious-medovik-61d889.netlify.app/">
              <img src={website} alt="" className="icon-item mb-5" />
            </a>
            <a href="https://github.com/Gonlonge/holidaze-exam2">
              <img src={github} alt="img" className="icon-item mb-5" />
            </a>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div className="image-wrapper mb-4">
            <a href="https://boisterous-bavarois-0d3175.netlify.app/">
              <img
                src={semesterproject2}
                alt="img"
                className="img-fluid image-item "
              />
            </a>
          </div>
          <div>
            <h3>Semester Project 2</h3>
            <p>
              Using official API, I had a task of making an auction app where
              you can register as a user and make an ad. And Can also give bid
              to other users.
            </p>
            <small>
              <p className="m-0">JavaScript</p>
            </small>
            <small>
              <p className="m-0">HTML</p>
            </small>
            <small>
              <p className="mt-0">SASS</p>
            </small>
            <a href="https://boisterous-bavarois-0d3175.netlify.app/">
              <img src={website} alt="" className="icon-item mb-5" />
            </a>
            <a href="https://github.com/Gonlonge/Semester-Project-2">
              <img src={github} alt="img" className="icon-item mb-5" />
            </a>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <a href="https://heartfelt-caramel-7076e6.netlify.app/">
            <div className="image-wrapper mb-4">
              <img src={ecom} alt="img" className="img-fluid image-item" />
            </div>
          </a>

          <div>
            <h3>JS Framework</h3>
            <p>
              Created a functional eCom website with add-to-cart functionality
              using the official API for seamless sales integration.
            </p>
            <small>
              <p className="m-0">React</p>
            </small>
            <small>
              <p className="mt-0">styled-components</p>
            </small>
            <a href="https://heartfelt-caramel-7076e6.netlify.app/">
              <img src={website} alt="" className="icon-item mb-5" />
            </a>
            <a href="https://github.com/Gonlonge/ecom-store-react">
              <img src={github} alt="img" className="icon-item mb-5" />
            </a>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div className="image-wrapper mb-4">
            <a href="https://gregarious-muffin-8332a2.netlify.app/">
              <img
                src={sosialmeets}
                alt="img"
                className="img-fluid image-item"
              />
            </a>
          </div>
          <div>
            <h3>Vanilla JavaScript</h3>
            <p>
              Using a official API, enable users to seamlessly view, post, edit,
              and delete social media content.
            </p>
            <small>
              <p className="m-0">JavaScript</p>
            </small>
            <small>
              <p className="m-0">HTML</p>
            </small>
            <small>
              <p className="mt-0">CSS</p>
            </small>
            <a href="https://gregarious-muffin-8332a2.netlify.app/">
              <img src={website} alt="" className="icon-item mb-5" />
            </a>
            <a href="https://github.com/Gonlonge/sosial-application-js_2">
              <img src={github} alt="img" className="icon-item mb-5" />
            </a>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div className="image-wrapper mb-4">
            <a href="https://sunny-cranachan-f09fef.netlify.app/">
              <img src={blog} alt="img" className="img-fluid image-item" />
            </a>
          </div>

          <div>
            <h3>Exam 1</h3>
            <p>
              I have decided to create a travel blog and developed my own API
              using WordPress.
            </p>
            <small>
              <p className="m-0">JavaScript</p>
            </small>
            <small>
              <p className="m-0">WordPress</p>
            </small>
            <small>
              <p className="m-0">HTML</p>
            </small>
            <small>
              <p className="mt-0">CSS</p>
            </small>
            <a href="https://sunny-cranachan-f09fef.netlify.app/">
              <img src={website} alt="" className="icon-item mb-5" />
            </a>
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-Gonlonge">
              <img src={github} alt="img" className="icon-item mb-5" />
            </a>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <div className="image-wrapper mb-4">
            <a href="https://elaborate-stardust-fdef64.netlify.app/">
              <img src={museum} alt="img" className="img-fluid image-item" />
            </a>
          </div>
          <div>
            <h3>Semester Project 1</h3>
            <p>
              The project was about creating a Museum website that targets
              primary and middle school and families.
            </p>
            <small>
              <p className="m-0">HTML</p>
            </small>
            <small>
              <p className="mt-0">CSS</p>
            </small>
            <a href="https://elaborate-stardust-fdef64.netlify.app/">
              <img src={website} alt="" className="icon-item mb-5" />
            </a>
            <a href="https://github.com/Gonlonge/Semester-project-Gonlonge">
              <img src={github} alt="img" className="icon-item mb-5" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
