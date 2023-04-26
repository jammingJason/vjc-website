import React from 'react';
import logo from './img/logo.jpg';
import linkedIn from './img/LI-In-Bug.png';
import gitHub from './img/github-mark.png';
import resume from './docs/vanJasonCrewsResume.pdf';
import './NavBar.css';
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="nav-link" aria-current="page" href="/">
            <img
              className="boxshadow"
              src={logo}
              alt="Logo"
              width="50px"
              style={{ borderRadius: '50%' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href={resume}>
                  Resumé
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://vanjason.com/jeopardy/"
                    >
                      Jeopardy
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://jammingjason.github.io/hackerNews/"
                    >
                      Hacker News
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://jammingjason.github.io/connectFour/"
                    >
                      Connect Four
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://crewsin-tunes.herokuapp.com/"
                    >
                      Spotify Companion App
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/education/northwestern/"
                    >
                      Northwestern University
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/education/southFlorida">
                      University of South Florida
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/vanjasoncrews"
                >
                  <img src={linkedIn} width="21px" alt="LinkedIn Logo" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/jammingJason">
                  <img src={gitHub} width="21px" alt="GitHub Logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
