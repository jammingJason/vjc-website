import React from 'react';
import wordCloud from './img/wordcloud.png';
import headShot from './img/vjcHeadShot.jpg';
import './Intro.css';
const Intro = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-6 text-start" id="headShotDiv">
            <img
              src={headShot}
              alt="Head Shot"
              width="100px"
              style={{ borderRadius: '25%', marginTop: '10px' }}
            />
          </div>
          <div className="col col-6 text-end">
            <h1>Van Jason Crews</h1>
            <h4>Full-Stack Developer</h4>
            <h6>
              <i class="fa-solid fa-phone"></i>&nbsp;
              <i class="fa-solid fa-comment-sms"></i> &nbsp;912.387.6989
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 text-end">
            <h6>
              <i class="fa-regular fa-envelope fa-bounce"></i>
              &nbsp;
              <a
                href="mailto:vanjasoncrews@gmail.com"
                title="vanjasoncrews@gmail.com"
              >
                vanjasoncrews@gmail.com
              </a>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 text-end">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 text-center">
            <img src={wordCloud} alt="Word Cloud" width="800px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
