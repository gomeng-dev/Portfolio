import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Lunia from "../../Assets/Projects/Lunia.jpg";
import Tao from "../../Assets/Projects/tao.jpg";
import Kinggod from "../../Assets/Projects/kinggod.jpg";
import zh from "../../Assets/Projects/zh.webp";
import excel2yaml from "../../Assets/Projects/excel2yaml.gif";

function Projects() {
  return (
    <section className="page-section" style={{ overflow: "auto"}}>
      <Container fluid className="project-section" style={{ background: "transparent" }}>
        <Particle />
        <Container>
          <h1 className="project-heading">
            지금까지 <strong className="skyblue">참여한 프로젝트</strong>
          </h1>
          <p style={{ color: "white" }}>개발하였던 프로젝트 중 공개 가능한 프로젝트입니다.</p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tao}
                title="도를 아십니까"
                description="처음 출시한 모바일 게임으로 개인 사업 진행 당시 기획 전반부터, 퍼블리셔를 통한 출시까지 진행했습니다."
                ytLink="https://youtu.be/4vBG_nYWjV4"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Lunia}
                title="루니아 원정대"
                description={"Allm 재직 당시 개발하였던 모바일 게임으로, 개발 초기부터 참여했습니다.\n기반 시스템 기획 전반과 출시까지 참여했습니다."}
                ytLink="https://github.com/gomeng-dev/Jeong"
                appLink="https://play.google.com/store/apps/details?id=kr.co.allm.luniadr"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Kinggod}
                title="킹갓캐슬"
                description={"모바일 오토배틀러 게임으로, 출시 2년차에 합류하여 시스템 기획을 진행하였습니다. 전반적인 UI UX 전반을 개편하였으며, 추가 성장요소 하우징시스템, 신규 게임모드를 진행하였습니다."}
                ytLink="https://www.youtube.com/watch?v=NU4V70gOcDc"
                appLink="https://play.google.com/store/apps/details?id=com.awesomepiece.castle&hl=ko"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={zh}
                title="좀비 고등학교"
                description="모바일 액션게임으로 한 세대를 풍미한 게임입니다. 출시 11년차에 합류하여 이벤트 모드 레벨 디자인, 보스전 설계, 업무 프로세스 개선 등을 진행 중에 있습니다."
                ytLink="https://www.youtube.com/watch?v=UuJoHFlFUNY&t=18s"
                appLink="https://play.google.com/store/apps/details?id=net.kernys.aooni&hl=ko"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={excel2yaml}
                title="Excel Add-in"
                description={"자체 개발한 엑셀 Add-in으로 업무 자동화를 위해 개발되었습니다. 기능으론 테이블 YAML 변환 기능, YAML 병합 기능 등이 있으며. Row 데이터를 수정하는 방식에서 벗어나 업무 효율 40% 가량 상승, 데이터 오류 감소 효과가 있었습니다."}
                ghLink="https://github.com/gomeng-dev/Excel2Yaml"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
