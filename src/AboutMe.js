import React from 'react';
import headShot from './img/vjcHeadShot.jpg';

const AboutMe = () => {
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
          <div className="col col-12 text-start">
            My name is Van Jason Crews. I love to program! My dedication to
            software development is second to none. My passion is full-stack
            development and I'm ready to share my talents, skills and knowledge
            with the right company. Hiring me will give you a dedicated, loyal,
            knowledgeable employee with not only software knowledge, but a very
            diverse background in many areas of Information Technology.
            Understanding these areas of IT gives me the ability to easily
            communicate the right information to the right people in the right
            organizations. I have experience and knowledge in the following
            areas:
            <br />
            <br />
            <ul>
              <li>Foundations of Leadership</li>
              <li>Business Continuity and Disaster Recovery</li>
              <li>IT Management</li>
              <li>Software Project Management</li>
              <li>Network Security</li>
              <li>Telecommunications and Computer Networks</li>
              <li>Big Data</li>
              <li>Data Science/Machine Learning</li>
              <li>Database Administration</li>
              <li>Database Systems Design & Implementation</li>
              <li>Web Application Development</li>
              <li>Object-Oriented Programming</li>
            </ul>
            <br />
            Along with a Master of Science in Information Systems from
            Northwestern University, I have also completed the University of
            South Florida's software coding bootcamp. The USF Software Engineer
            Coding Bootcamp, a 9-month intensive course in Software Engineering
            methodologies and technologies with 700+ hours of hands-on course
            material and 1:1 industry expert mentor oversight, gives me the
            knowledge, skills, and experience to analyze, write, and test
            software. I develop tested code for quality solutions that prevent
            bugs, and I have built and tested many applications with several
            languages, libraries, and frameworks. Companies may assure I achieve
            programming tasks efficiently. Please contact me to further discuss
            myself and opportunities you may have.
            <br />
            <br />
            <h3>
              <u>SPECIALITIES</u>
            </h3>
            <br />
            Software Engineer:
            <br />
            Frontend Development with JavaScript and HTML, Backend Development
            with Python, Backend Development with Node.js, Frontend Development
            with ReactJS and Data Structures & Algorithms.
            <br />
            <br />
            Programming:
            <br />
            JavaScript, HTML, CSS, debugging, DOM manipulation, command line,
            testing, advanced array methods, coding on modern codebases, object
            oriented programming, powerful styling, the internet, APIs, writing
            asynchronous code, adaptable programming, web servers and
            frameworks, databases and relational databases, database management,
            object relational mappers, build production applications, security
            and authentication, routing and interacting with APIs from the
            server side, deploy applications to production, server side
            JavaScript, building web servers and APIs, building full stack
            applications, client side routing, algorithms & data structures.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
