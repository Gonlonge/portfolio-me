import React from "react";
import grades from "../../images/grade-icon.png";

function FrontendCv() {
  return (
    <div>
      <div className="section-line mt-5"></div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <div>
            <h4>Work</h4>
            <h3>Junior Frontend Developer</h3>
            <p>Felo AS - 06.2022 - 08.2022</p>
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <div>
            <h4>Education</h4>
            <h3>Frontend Developer student</h3>
            <p>Noroff - 08.2021 - 06.2022</p>
            <p>Noroff - 08.2021 - 09.2023</p>
            <p>Grades A - C - B</p>
            <p>Passed, waiting for the diploma to be delivered.</p>
            <a href="../../images/current-grates.pdf" download>
              <img src={grades} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-5">
          <div>
            <h4>Programming</h4>
            <p>JavaScript</p>
            <p>Bootstrap</p>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>SASS</p>
            <p>Rest API</p>
            <p>Styled components</p>
            <p>WordPress</p>
            <p>NodeJS</p>
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <div>
            <h4>Software</h4>
            <p>Local</p>
            <p>Terminal</p>
            <p>GitHub</p>
            <p>Postman</p>
            <p>Figma</p>
            <p>Adobe XD</p>
            <p>Adobe Photoshop</p>
            <p>FileZilla</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontendCv;
