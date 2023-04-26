import React from 'react';
import northwesternLogo from './img/northwesternLogo.png';
import campus from './img/northwestern-university-chicago-campus_20300027660_o.jpg';
import courseDescription from './docs/northwesternCourses.pdf';
const Northwestern = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12 m-2">
            <img src={northwesternLogo} alt="Northwestern" />
          </div>
        </div>
        <div className="row">
          <div className="col col-6 text-start">
            <img src={campus} alt="Northwestern" width="400px" />
          </div>
          <div className="col col-6 text-start">
            <ul>
              <li>
                <a href="/education/northwestern/transcript">Transcript</a>
              </li>
              <li>
                <a href="/education/northwestern/diplomaVerify">
                  Diploma Verification
                </a>
              </li>
              <li>
                <a href={courseDescription}>Course Description</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Northwestern;
