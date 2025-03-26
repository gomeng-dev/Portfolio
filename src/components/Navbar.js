import React, { useState, useEffect, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/gomeng-logo.svg";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineFileDone,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { PortfolioContext } from "../App";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const { showPortfolio, portfolioParam } = useContext(PortfolioContext);

  // 디버깅 로그
  useEffect(() => {
    console.log('== NAVBAR CONTEXT DEBUGGING ==');
    console.log('Context showPortfolio:', showPortfolio);
    console.log('Portfolio Param:', portfolioParam);
    console.log('===================');
  }, [showPortfolio, portfolioParam]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // 포트폴리오 파라미터를 URL에 유지하는 커스텀 링크 생성 함수
  const getNavLink = (path) => {
    // HashRouter는 자동으로 #을 추가하므로 경로만 반환합니다
    // 이미 React Router의 Link 컴포넌트가 적절히 처리함
    
    if (showPortfolio && portfolioParam) {
      // 파라미터 이미 존재하면 추가
      if (path.includes("?")) {
        return `${path}&${portfolioParam}`;
      } else {
        return `${path}?${portfolioParam}`;
      }
    }
    return path;
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ 
        backgroundColor: navColour 
          ? "rgba(27, 26, 46, 0.85)" 
          : "rgba(24, 26, 39, 0.8)", 
        backdropFilter: "blur(15px)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        borderBottom: "1px solid rgba(79, 163, 247, 0.2)"
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to={getNavLink("/")} className="d-flex align-items-center" style={{ padding: "0 5px" }}>
          <img 
            src={logo} 
            className="img-fluid logo" 
            alt="Gomeng" 
            style={{
              display: "block",
              objectPosition: "left center",
              height: "35px"
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{ padding: "0.15rem 0.4rem" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to={getNavLink("/")} onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> 홈
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={getNavLink("/about")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> 소개
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={getNavLink("/project")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                프로젝트
              </Nav.Link>
            </Nav.Item>

            {showPortfolio && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to={getNavLink("/portfolio")}
                  onClick={() => updateExpanded(false)}
                >
                  <BsFileEarmarkText style={{ marginBottom: "2px" }} /> 포트폴리오
                </Nav.Link>
              </Nav.Item>
            )}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={getNavLink("/career")}
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineWorkHistory style={{ marginBottom: "2px" }} /> 경력
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={getNavLink("/resume")}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> 이력서
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/gomeng-dev"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
