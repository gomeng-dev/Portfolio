import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";

function Career() {
  return (
    <section className="page-section">
      <Container fluid className="career-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="skyblue">경력사항</strong>
          </h1>
          <p style={{ color: "white" }}>
            그동안의 직장 경력 및 프로젝트 이력입니다.
          </p>

          <Row className="career-timeline">
            <Col md={12}>
              <div className="career-item">
                <h3>
                  <FaBuilding /> (주) 디브레버 코퍼레이션
                  <span className="period">
                    <FaCalendarAlt /> 2015.01 - 2017.02
                  </span>
                </h3>
                <h4>직책: 대표</h4>
                <ul className="career-description">
                  <li>국가 사업 기획 제안</li>
                  <li>투자 유치 및 관리</li>
                  <li>기타 개발 외 조직 관리</li>
                </ul>
                <div className="career-projects">
                  <h5 className="skyblue">주요 프로젝트</h5>
                  <div className="project-item">
                    <h6>모바일게임 도롱 아삼니카 다빙링</h6>
                    <p>30만 다운로드 달성!</p>
                  </div>
                  <div className="project-item">
                    <h6>PS VR 게임 Effie 다빙링</h6>
                  </div>
                </div>
              </div>

              <div className="career-item">
                <h3>
                  <FaBuilding /> (주) 코아소프트
                  <span className="period">
                    <FaCalendarAlt /> 2017.02 - 2018.02
                  </span>
                </h3>
                <h4>직책: 개발실 사원 | 비계약 개발</h4>
                <ul className="career-description">
                  <li>VR 아케이드 사업 기획</li>
                  <li>해외 사업 PM</li>
                </ul>
                <div className="career-projects">
                  <h5 className="skyblue">주요 프로젝트</h5>
                  <div className="project-item">
                    <h6>워치 기반 마케팅 앱 기획</h6>
                  </div>
                </div>
              </div>
              
              {/* 추가 경력은 이곳에 작성 */}
              
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Career; 