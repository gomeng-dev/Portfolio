import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Career from "./components/Career/Career";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeBg from "./Assets/home-bg.svg";

// 부트스트랩 컴포넌트에 LINE Seed KR 폰트 적용
const style = document.createElement('style');
style.innerHTML = `
  .btn, .form-control, .card, .card-title, .card-text, .nav-link, .navbar-brand, .dropdown-item, 
  .modal-title, .modal-body, .alert, .badge, .tooltip, .popover, .toast, .breadcrumb-item {
    font-family: 'LINE Seed KR', sans-serif !important;
  }

  .content-wrapper {
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${homeBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: calc(100vh - 70px); /* 헤더와 푸터 높이를 고려한 값 */
    display: flex;
    flex-direction: column;
  }

  section.page-section {
    flex: 1;
    width: 100%;
    background: transparent !important;
  }
`;
document.head.appendChild(style);

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App d-flex flex-column min-vh-100" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div className="flex-grow-1 content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
