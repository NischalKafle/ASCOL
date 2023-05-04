import React from "react";
import "./App.css";
import Navbars from "./Navbars";
import Card from "./Card";
import Home from "./Home";
import Footer from "./Footer";
import Exec from "./Exec";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbars />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="Services"
          element={
            <>
              <Navbars />
              <Card />
            </>
          }
        />
        <Route path="Our Team">
          <Route
            path="Board Members"
            element={
              <>
                <Navbars />
              </>
            }
          />
          <Route
            path="Executive Committee"
            element={
              <>
                <Navbars />
                <Exec />
                <Footer />
              </>
            }
          />
          <Route
            path="Support Staff"
            element={
              <>
                <Navbars />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
