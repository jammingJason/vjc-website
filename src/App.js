import React from 'react';
import './App.css';
import Intro from './Intro';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Northwestern from './Northwestern';
import Missing from './Missing';
import Transcript from './Transcript';
import DiplomaVerify from './DiplomaVerify';
import SouthFlorida from './SouthFlorida';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route exact="true" path="/" element={<Intro />} />
            <Route exact="true" path="/aboutMe" element={<AboutMe />} />
            <Route
              exact="true"
              path="/education/southFlorida"
              element={<SouthFlorida />}
            />
            <Route
              exact="true"
              path="/education/northwestern"
              element={<Northwestern />}
            />
            <Route
              exact="true"
              path="/education/northwestern/transcript"
              element={<Transcript />}
            />
            <Route
              exact="true"
              path="/education/northwestern/diplomaVerify"
              element={<DiplomaVerify />}
            />
            <Route path="*" element={<Missing />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
