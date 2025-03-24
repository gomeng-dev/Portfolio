import React, { useState, useEffect, createContext } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Career from "./components/Career/Career";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Portfolio from "./components/Portfolio/Portfolio";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation
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
    overflow: auto; /* 스크롤 허용 */
  }

  section.page-section {
    flex: 1;
    width: 100%;
    background: transparent !important;
    overflow: visible; /* 콘텐츠가 넘칠 경우 표시 */
  }
`;
document.head.appendChild(style);

// 포트폴리오 표시 여부를 위한 전역 컨텍스트 생성
export const PortfolioContext = createContext({
  showPortfolio: false,
  setShowPortfolio: () => {},
  portfolioParam: ""
});

// URL 파라미터 유지를 위한 컴포넌트
function UrlParamManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showPortfolio } = React.useContext(PortfolioContext);
  
  useEffect(() => {
    // 현재 URL의 경로부분과 쿼리 파라미터 부분 분리
    const currentPath = location.pathname || "/";
    const hasPortfolioParam = location.hash.includes("portfolio=true");
    
    // 디버깅 로그
    console.log("== URL PARAM MANAGER ==");
    console.log("Current path:", currentPath);
    console.log("Has portfolio param:", hasPortfolioParam);
    console.log("Context showPortfolio:", showPortfolio);
    
    // portfolio=true 파라미터가 있고 경로가 /portfolio가 아니면 페이지 이동
    if (hasPortfolioParam && currentPath !== "/portfolio" && location.pathname !== "/portfolio") {
      navigate("/portfolio", { replace: false });
    }
    
    // 현재 페이지가 변경될 때 portfolio 파라미터 유지
    if (showPortfolio && !hasPortfolioParam && location.hash && !location.hash.includes("portfolio=true")) {
      // 현재 해시에 portfolio 파라미터 추가
      let newHash = location.hash;
      if (newHash.includes("?")) {
        // 이미 다른 쿼리 파라미터가 있는 경우 
        if (newHash.endsWith("?")) {
          newHash += "portfolio=true";
        } else {
          newHash += "&portfolio=true";
        }
      } else {
        // 쿼리 파라미터가 없는 경우
        if (newHash.includes("#")) {
          newHash += "?portfolio=true";
        } else {
          newHash = "#/?portfolio=true";
        }
      }
      
      // 새 URL로 교체 (페이지 이동 없이 URL만 변경)
      window.history.replaceState(null, "", newHash);
    }
  }, [location, navigate, showPortfolio]);
  
  return null;
}

// App 컴포넌트
function App() {
  const [load, upadateLoad] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [portfolioParam, setPortfolioParam] = useState("");

  // 로딩 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // URL에서 portfolio 파라미터 감지 및 유지
  useEffect(() => {
    // URL에서 portfolio 파라미터 확인
    const checkPortfolioParam = () => {
      const fullUrl = window.location.href;
      const hasPortfolioParam = fullUrl.includes("portfolio=true");
      
      console.log("== APP COMPONENT ==");
      console.log("Full URL:", fullUrl);
      console.log("Has portfolio param:", hasPortfolioParam);
      
      setShowPortfolio(hasPortfolioParam);
      
      // portfolio 파라미터 유지를 위해 값 저장
      if (hasPortfolioParam) {
        setPortfolioParam("portfolio=true");
      } else {
        setPortfolioParam("");
      }
    };
    
    // 초기 로드 및 URL 변경 시 체크
    checkPortfolioParam();
    
    // URL 변경 이벤트 리스너
    const handleHashChange = () => {
      checkPortfolioParam();
    };
    
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Router>
      <PortfolioContext.Provider value={{ showPortfolio, setShowPortfolio, portfolioParam }}>
        <Preloader load={load} />
        <div className="App d-flex flex-column min-vh-100" id={load ? "no-scroll" : "scroll"} style={{ overflow: "auto" }}>
          <Navbar />
          <ScrollToTop />
          <UrlParamManager />
          <div className="flex-grow-1 content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/career" element={<Career />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </PortfolioContext.Provider>
    </Router>
  );
}

export default App;
