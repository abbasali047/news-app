import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = "2cd4b4be165d452096e332fe10c67792";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={"3px"} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
