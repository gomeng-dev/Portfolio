import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // 로컬 스토리지에서 방문자 수 가져오기
    const storedCount = localStorage.getItem('visitorCount');
    const count = storedCount ? parseInt(storedCount) : 0;
    
    // 세션 스토리지로 현재 세션 확인 (중복 카운트 방지)
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // 첫 방문이면 카운트 증가
      const newCount = count + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      sessionStorage.setItem('hasVisited', 'true');
      setVisitorCount(newCount);
    } else {
      // 이미 방문했으면 현재 카운트만 표시
      setVisitorCount(count);
    }
  }, []);

  return (
    <Container fluid className="footer mt-auto py-3">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Gomeng</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/gomeng-dev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:son2688s@naver.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/son2688s/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ttanttopapa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center">
            <FiUsers style={{ marginRight: "8px", fontSize: "1.2em", color: "white" }} />
            <span style={{ color: "white" }}>방문자 수: {visitorCount}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
