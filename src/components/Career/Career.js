import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaCalendarAlt, FaBuilding, FaGamepad, FaTools, FaBriefcase } from "react-icons/fa";
import { SiGoogleplay, SiYoutube } from "react-icons/si";
import { Button } from "react-bootstrap";
import "./Career.css"; // CSS 파일 임포트

function Career() {
  return (
    <section className="page-section notion-style" style={{ overflow: "auto", minHeight: "100vh" }}>
      <Container fluid className="project-section" style={{ background: "transparent", position: "relative" }}>
        <Particle />
        <div className="page-top-padding"></div>
        <Container className="mt-5">
          <h1 className="project-heading">
            <strong className="skyblue">경력사항</strong>
            <span className="career-years" style={{ fontSize: "1.5rem", marginLeft: "15px", color: "#ddd" }}>총 9년</span>
          </h1>
          <p style={{ color: "white", fontSize: "1.3rem", fontWeight: "400" }} className="mb-5">
            그동안의 직장 경력 및 프로젝트 이력입니다.
          </p>

          {/* 어썸피스 */}
          <div className="notion-entry mb-5 enhanced-notion-entry">
            <div className="notion-entry-header">
              <div className="notion-entry-title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <FaBuilding className="company-icon" style={{ fontSize: '1.5rem', marginRight: '10px' }} />
                  <h2 className="mb-0">
                    <span className="company-name">(주) 어썸피스</span>
                  </h2>
                </div>
                <span className="notion-period">
                  <FaCalendarAlt className="me-2" /> 2022.05 - 재직 중
                </span>
              </div>
              <h3 className="notion-role mb-4">시스템 기획 & PM & 모드 기획</h3>
            </div>
            
            <div className="notion-tasks mb-4">
              <h4 className="notion-subtitle mb-3">담당 업무</h4>
              <ul className="notion-list">
                <li>PM 업무 수행</li>
                <li>Jira ITS 도입 주도</li>
                <li>BM 기획 및 시스템 기획</li>
                <li>업무용 도구 제작</li>
              </ul>
            </div>
            
            <div className="notion-projects">
              <h4 className="notion-subtitle mb-4 skyblue">주요 프로젝트</h4>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaGamepad className="me-2 project-icon" />
                    <h5 className="mb-0">킹갓캐슬 (2022.05 ~ 2024.11)</h5>
                  </div>
                  <div className="notion-button-container">
                    <Button 
                      variant="success" 
                      href="https://play.google.com/store/apps/details?id=com.awesomepiece.castle&hl=kr&gl=kr" 
                      target="_blank"
                      className="notion-button"
                      size="sm"
                    >
                      <SiGoogleplay className="me-2" /> 플레이스토어
                    </Button>
                  </div>
                </div>
                <ul className="notion-list mt-3">
                  <li>신규 게임 모드 기획</li>
                  <li>시스템 UI/UX 기획 (영지, 인벤토리, 보구, 가챠, 장신구 시스템)</li>
                  <li>BM 기획 (프리미엄 시즌 패스 BM)</li>
                  <li>PM (Jira ITS 도입)</li>
                </ul>
              </div>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaGamepad className="me-2 project-icon" />
                    <h5 className="mb-0">좀비고등학교 (2024.11 ~ 재직 중)</h5>
                  </div>
                  <div className="notion-button-container">
                    <Button 
                      variant="success" 
                      href="https://play.google.com/store/apps/details?id=net.kernys.aooni" 
                      target="_blank"
                      className="notion-button"
                      size="sm"
                    >
                      <SiGoogleplay className="me-2" /> 플레이스토어
                    </Button>
                  </div>
                </div>
                <ul className="notion-list mt-3">
                  <li>모드 기획 (크리스마스 멜로디, 요정들의 가든파티, 좀비고 리부트 ACT2 에피소드 2)</li>
                  <li>BM 기획 (11주년 상품 BM)</li>
                  <li>PM (애자일 기반 업무 프로세스 도입, Jira ITS 도입)</li>
                  <li>업무용 도구 제작 (VSTO 기반 Excel to Yaml 변환 툴, JIRA 용 챗봇)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 올엠 */}
          <div className="notion-entry mb-5 enhanced-notion-entry">
            <div className="notion-entry-header">
              <div className="notion-entry-title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <FaBuilding className="company-icon" style={{ fontSize: '1.5rem', marginRight: '10px' }} />
                  <h2 className="mb-0">
                    <span className="company-name">(주) 올엠</span>
                  </h2>
                </div>
                <span className="notion-period">
                  <FaCalendarAlt className="me-2" /> 2020.09 - 2022.05
                </span>
              </div>
              <h3 className="notion-role mb-4">DASH 팀 기획파트 사원</h3>
            </div>
            
            <div className="notion-tasks mb-4">
              <h4 className="notion-subtitle mb-3">담당 업무</h4>
              <ul className="notion-list">
                <li>인 게임, 아웃게임 시스템 기획</li>
                <li>전투 기획 (BehaviorTree 기반 AI 설계, 몬스터 디자인)</li>
                <li>레벨 기획 (스테이지 제작, 보스레이드 콘텐츠 제작)</li>
              </ul>
            </div>
            
            <div className="notion-projects">
              <h4 className="notion-subtitle mb-4 skyblue">주요 프로젝트</h4>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaGamepad className="me-2 project-icon" />
                    <h5 className="mb-0">루니아 원정대</h5>
                  </div>
                  <Button 
                    variant="success" 
                    href="https://play.google.com/store/apps/details?id=kr.co.allm.luniadr" 
                    target="_blank"
                    className="notion-button"
                  >
                    <SiGoogleplay className="me-2" /> 플레이스토어
                  </Button>
                </div>
                <ul className="notion-list mt-3">
                  <li>인 게임, 아웃게임 시스템 기획 (뽑기, 캐릭터, 시련의 탑, 보스레이드 시스템)</li>
                  <li>전투 기획 (AI 설계, 몬스터 디자인, 패턴 설계)</li>
                  <li>레벨 기획 (시즌 콘텐츠, 스테이지, 보스레이드 콘텐츠 제작)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 한빛소프트 */}
          <div className="notion-entry mb-5 enhanced-notion-entry">
            <div className="notion-entry-header">
              <div className="notion-entry-title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <FaBuilding className="company-icon" style={{ fontSize: '1.5rem', marginRight: '10px' }} />
                  <h2 className="mb-0">
                    <span className="company-name">(주) 한빛소프트</span>
                  </h2>
                </div>
                <span className="notion-period">
                  <FaCalendarAlt className="me-2" /> 2018.09 - 2019.09
                </span>
              </div>
              <h3 className="notion-role mb-4">AR팀 기획파트 사원 | 비게임 개발</h3>
            </div>
            
            <div className="notion-tasks mb-4">
              <h4 className="notion-subtitle mb-3">담당 업무</h4>
              <ul className="notion-list">
                <li>증강현실 시뮬레이터 기획</li>
              </ul>
            </div>
            
            <div className="notion-projects">
              <h4 className="notion-subtitle mb-4 skyblue">주요 프로젝트</h4>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaTools className="me-2 project-icon" />
                    <h5 className="mb-0">증강현실 시뮬레이터 AERTS</h5>
                  </div>
                </div>
                <ul className="notion-list mt-3">
                  <li>AR파트 시스템 기획</li>
                  <li>증강 현실 기반 가상 회의 시뮬레이션 시스템 기획</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 코아소프트 */}
          <div className="notion-entry mb-5 enhanced-notion-entry">
            <div className="notion-entry-header">
              <div className="notion-entry-title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <FaBuilding className="company-icon" style={{ fontSize: '1.5rem', marginRight: '10px' }} />
                  <h2 className="mb-0">
                    <span className="company-name">(주) 코아소프트</span>
                  </h2>
                </div>
                <span className="notion-period">
                  <FaCalendarAlt className="me-2" /> 2017.02 - 2018.02
                </span>
              </div>
              <h3 className="notion-role mb-4">개발실 사원 | 비게임 개발</h3>
            </div>
            
            <div className="notion-tasks mb-4">
              <h4 className="notion-subtitle mb-3">담당 업무</h4>
              <ul className="notion-list">
                <li>VR 아케이드 사업 전담</li>
                <li>해외 사업 PM</li>
              </ul>
            </div>
            
            <div className="notion-projects">
              <h4 className="notion-subtitle mb-4 skyblue">주요 프로젝트</h4>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaTools className="me-2 project-icon" />
                    <h5 className="mb-0">위치 기반 마케팅 앱 기획</h5>
                  </div>
                </div>
                <ul className="notion-list mt-3">
                  <li>인 게임 콘텐츠 기획</li>
                  <li>QA 업무 담당</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 디브레버 코퍼레이션 */}
          <div className="notion-entry mb-5 enhanced-notion-entry">
            <div className="notion-entry-header">
              <div className="notion-entry-title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <FaBuilding className="company-icon" style={{ fontSize: '1.5rem', marginRight: '10px' }} />
                  <h2 className="mb-0">
                    <span className="company-name">(주) 디브레버 코퍼레이션</span>
                  </h2>
                </div>
                <span className="notion-period">
                  <FaCalendarAlt className="me-2" /> 2015.01 - 2017.02
                </span>
              </div>
              <h3 className="notion-role mb-4">대표</h3>
            </div>
            
            <div className="notion-tasks mb-4">
              <h4 className="notion-subtitle mb-3">담당 업무</h4>
              <ul className="notion-list">
                <li>국가 사업 기획 제안</li>
                <li>투자 유치 및 관리</li>
                <li>기타 개발 외 조직 관리</li>
              </ul>
            </div>
            
            <div className="notion-projects">
              <h4 className="notion-subtitle mb-4 skyblue">주요 프로젝트</h4>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaGamepad className="me-2 project-icon" />
                    <h5 className="mb-0">모바일게임 도를 아십니까</h5>
                  </div>
                  <div className="notion-button-container">
                    <Button 
                      variant="danger" 
                      href="https://www.youtube.com/watch?v=4vBG_nYWjV4" 
                      target="_blank"
                      className="notion-button"
                      size="sm"
                    >
                      <SiYoutube className="me-2" /> 유튜브
                    </Button>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="notion-highlight">30만 다운로드 달성!</span>
                </div>
              </div>
              
              <div className="notion-project mb-4">
                <div className="notion-project-header">
                  <div className="notion-project-title">
                    <FaGamepad className="me-2 project-icon" />
                    <h5 className="mb-0">PS VR 게임 Effie 디렉팅</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 기술 및 학력 섹션 */}
          <div className="notion-footer mt-5">
            <Row>
              <Col md={6} className="mb-5">
                <div className="notion-info-section">
                  <h3 className="notion-subtitle mb-4">
                    <strong className="skyblue">학력사항</strong>
                  </h3>
                  <div className="notion-info-item">
                    <h4 className="mb-2">광주석산고등학교</h4>
                    <p className="notion-period">
                      <FaCalendarAlt className="me-2" /> 2012.02 - 2015.02 졸업
                    </p>
                  </div>
                </div>
              </Col>
              
              <Col md={6} className="mb-5">
                <div className="notion-info-section">
                  <h3 className="notion-subtitle mb-4">
                    <strong className="skyblue">어학</strong>
                  </h3>
                  <ul className="notion-list">
                    <li>영어 : 중 (영어권 원어민과 회화 및 업무 가능)</li>
                    <li>일어 : 중</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Career; 