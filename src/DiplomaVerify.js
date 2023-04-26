import React from 'react';
import diplomaVerify from './img/diplomaVerification.png';
import logo from './img/northwesternLogo.png';
const DiplomaVerify = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12 m-2">
            <img src={logo} alt="Northwestern" width="400rem" />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 m-2">
            <img
              src={diplomaVerify}
              alt="Diploma Verification"
              width="600rem"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiplomaVerify;
