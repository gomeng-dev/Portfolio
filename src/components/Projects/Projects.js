import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import emotion from "../../Assets/Projects/emotion.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import leaf from "../../Assets/Projects/leaf.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <section className="page-section">
      <Container fluid className="project-section" style={{ background: 'transparent' }}>
        <Particle />
        <Container>
          <h1 className="project-heading">
            최근 <strong className="skyblue">작업물</strong>
          </h1>
          <p style={{ color: "white" }}>
            최근에 작업한 몇 가지 프로젝트입니다.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                title="Slack 문자열 챗봇"
                description="
                자체적으로 개발한 슬랙 봇으로, 매일 자동 스케줄 실행에 따라 각 그룹에 멘션합니다.
                주요 기능으론 웹훅과 슬랙API를 사용하여 구현했고, 팀 내 일정을 전달하고 문화를 만들기 위한 도구입니다.
                기여도: 100%"
                ghLink="https://github.com/gomeng-dev/Jeong"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf}
                title="유니티 게임"
                description="안드로이드 앱으로 개발한 턴제 RPG 게임입니다.
                주요 기능으론 캐릭터 조작, 전투 시스템, 레벨 진행 및 획득 시스템 등이 있습니다.
                개인 취미로 진행한 프로젝트로, 모든 캐릭터와 전투 시스템을 설계했습니다.
                기여도: 100%"
                ghLink="https://github.com/gomeng-dev/Unity"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                title="HanEuAll"
                description="출장 예약, 차량 예약, 부재 현황 등을 웹(반응형)으로 구현했습니다.
                주요 기능으론 각종 예약 시스템, 휴가 신청 기능, 메일 알림, 승인 기능이 있습니다.
                프론트 페이지를 개발하고, 기획 단계부터 참여했습니다.
                기여도: 30%"
                ghLink="https://github.com/gomeng-dev/HanEuAll"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={suicide}
                title="Game Designer"
                description="로봇 게임 기획 및 개발에 참여했습니다.
                주요 기능으론 최대 4인 플레이 가능하며, 로봇 조작 및 전투, 맵 상호작용 등이 있습니다.
                시스템 기획, 리소스 제작, 레벨 디자인등을 담당했습니다.
                기여도: 40%"
                ghLink="https://github.com/gomeng-dev/GameDesigner"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={codeEditor}
                title="Excel Add-in"
                description="자체 개발한 엑셀 Add-in으로 업무 자동화를 위해 개발되었습니다.
                주요 기능으론 데이터 변환, 행 열 계산, 보고서 자동 생성이 있습니다.
                VBA 및 Macro 개발 업무 자동화로 40% 시간 절약, 데이터 오류 감소 효과가 있었습니다.
                기여도: 100%"
                ghLink="https://github.com/gomeng-dev/ExcelAddin"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blog}
                title="AI Study App"
                description="AI 기반 공부 앱으로 프로토타입 단계입니다.
                주요 기능으론 AI 퀴즈 생성, 오답 추적, 개인 학습 진도, 예상 시험 범위 제공이 있습니다.
                기여도: 0% (프로토타입)"
                ghLink="https://github.com/gomeng-dev/AiStudy"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
