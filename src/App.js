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
  const { showPortfolio, setShowPortfolio } = React.useContext(PortfolioContext);
  
  useEffect(() => {
    // HashRouter에서는 location.search로 파라미터 확인 (React Router v6에서는 search로 제공됨)
    const currentPath = location.pathname || "/";
    
    // 해시 URL에서 파라미터 추출
    // location.search는 HashRouter에서도 search 파라미터를 감지
    const hasPortfolioParam = location.search.includes("portfolio=true");
    
    // 디버깅 로그
    console.log("== URL PARAM MANAGER ==");
    console.log("Current path:", currentPath);
    console.log("Current search:", location.search);
    console.log("Has portfolio param:", hasPortfolioParam);
    console.log("Context showPortfolio:", showPortfolio);
    
    // portfolio=true 파라미터가 있으면 showPortfolio를 true로 설정만 하고 리다이렉트하지 않음
    if (hasPortfolioParam && !showPortfolio) {
      setShowPortfolio(true);
    }
    
    // 현재 페이지가 변경될 때 portfolio 파라미터 유지
    if (showPortfolio && !hasPortfolioParam) {
      // 현재 URL에 portfolio 파라미터 추가
      const search = location.search || "";
      let newSearch = "";
      
      if (search.includes("?")) {
        // 이미 다른 쿼리 파라미터가 있는 경우
        if (search.endsWith("?")) {
          newSearch = search + "portfolio=true";
        } else {
          newSearch = search + "&portfolio=true";
        }
      } else {
        // 쿼리 파라미터가 없는 경우
        newSearch = "?portfolio=true";
      }
      
      // 새 URL로 교체 (페이지 이동 없이 URL만 변경)
      navigate(location.pathname + newSearch, { replace: true });
    }
  }, [location, navigate, showPortfolio, setShowPortfolio]);
  
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
      // HashRouter에서는 React Router v6부터 파라미터가 location.search로 제공됨
      const searchStr = window.location.hash.split('?')[1] || '';
      const searchParams = new URLSearchParams(searchStr);
      const hasPortfolioParam = searchParams.has("portfolio") && searchParams.get("portfolio") === "true";
      
      console.log("== APP COMPONENT ==");
      console.log("Current URL:", window.location.href);
      console.log("Current hash:", window.location.hash);
      console.log("Search string:", searchStr);
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
    const handleUrlChange = () => {
      checkPortfolioParam();
    };
    
    window.addEventListener("hashchange", handleUrlChange);
    
    return () => {
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  return (
    <Router>
      <PortfolioContext.Provider value={{ showPortfolio, setShowPortfolio, portfolioParam }}>
        <Preloader load={load} />
        <div 
          className="App d-flex flex-column min-vh-100" 
          id={load ? "no-scroll" : "scroll"} 
          style={{ 
            position: "relative",
            width: "100%",
            height: "100%",
            pointerEvents: "auto"
          }}
        >
          <Navbar />
          <ScrollToTop />
          <UrlParamManager />
          <div 
            className="flex-grow-1 content-wrapper"
          >
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
