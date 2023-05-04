import React from "react";
import "./App.css";
import Navbars from "./Navbars";
import Card from "./Card";
import Home from "./Home";
import Footer from "./Footer";
import Exec from "./Exec";
import Director from "./Director";
import Sup1 from "./Sup1";
import FooterNew from "./FooterNew";
import About from "./About";
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
          path="About"
          element={
            <>
              <Navbars />
              <About/>
            </>
          }
        />
        <Route
          path="Services"
          element={
            <>
              <Navbars />
              <Card />
              <Footer />
            </>
          }
        />
        <Route path="Our Team">
          <Route
            path="Board Members"
            element={
              <>
                <Navbars />
                <Director />
                <Footer/>
              </>
            }
          />
          <Route
            path="Executive Committee"
            element={
              <>
                <Navbars />
                <Exec />
                <Footer/>
              </>
            }
          />
          <Route
            path="Support Staff"
            element={
              <>
              <div>
                <Navbars />
                <Sup1 />
               
              
              </div>
                <FooterNew/>
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
