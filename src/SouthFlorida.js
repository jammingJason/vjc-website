import React from 'react';
import logo from './img/soFlaLogo.png';
import cert from './img/vanJasonCertSoFla.png';
const SouthFlorida = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12 m-2">
            <img src={logo} alt="University of South Florida" />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 m-2">
            <h3>Curriculum</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col col-6 text-start">
            <ul>
              <li> HTML </li>
              <li> CSS </li>
              <li> JavaScript </li>
              <li> Web Fundamentals </li>
              <li> DOM Manipulation </li>
              <li> Developer Fundamentals </li>
              <li> Testing with Jasmine </li>
              <li> Advanced Array Methods </li>
              <li> ES2015 </li>
              <li> Object-Oriented Programming </li>
              <li> jQuery and Twitter Bootstrap </li>
              <li> How the Web Works and AJAX </li>
              <li> Python Fundamentals </li>
              <li> Flask Fundamentals </li>
            </ul>
          </div>

          <div className="col col-6 text-start">
            <ul>
              <li> SQL </li>
              <li> SQLAlchemy </li>
              <li> Intermediate Flask </li>
              <li> Intermediate Terminal </li>
              <li> Node Fundamentals </li>
              <li> Express Fundamentals </li>
              <li> Express and Postgres </li>
              <li> Intermediate Express </li>
              <li> ReactJS Fundamentals </li>
              <li> React Router and React History </li>
              <li> Redux </li>
              <li> React Wrap-up </li>
              <li> Data Structures + Algorithms </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <hr />
            <img src={cert} alt="Certification" width={'50%'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SouthFlorida;
