import React from 'react';
import transcript from './img/transcriptNU.png';
import northwesternLogo from './img/northwesternLogo.png';

const Transcript = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12 m-2">
            <img src={northwesternLogo} alt="Northwestern" width="400rem" />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 m-2">
            <img src={transcript} alt="Transcript" width="600rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transcript;
