import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import gachaUIDoc from "../../Assets/루니아원정대-가챠 UI.pdf";
import characterSystemDoc from "../../Assets/루니아원정대-캐릭터 시스템.pdf";
import boguSystemDoc from "../../Assets/킹갓캐슬-보구시스템.pdf";

// 썸네일 이미지 경로 (각 PDF에 맞는 이미지)
import Lunia from "../../Assets/Projects/Lunia.jpg";
import Kinggod from "../../Assets/Projects/kinggod.jpg";
import excel2yaml from "../../Assets/Projects/excel2yaml.gif";

function Portfolio() {
  // 설명 텍스트에 개행 적용을 위한 함수
  const renderDescription = (text) => {
    if (!text) return null;

    // 줄바꿈 문자로 분리하고 각 줄 사이에 <br/> 태그 삽입
    return text.split("\n").map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <Container fluid className="portfolio-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="skyblue">기획서 포트폴리오</strong>
        </h1>
        <p style={{ color: "white" }}>개발하였던 프로젝트 중 포트폴리오로 일부 공개 가능한 기획서입니다.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={6} className="portfolio-card">
            <Card className="portfolio-card-view">
              <Card.Img variant="top" src={Kinggod} alt="보구 시스템 기획서" className="portfolio-card-img" />
              <Card.Body>
                <Card.Title>킹갓캐슬-보구시스템</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {renderDescription("킹갓캐슬 게임의 보구 시스템에 관한 기획서입니다.\n특수 능력 시스템의 구조와 게임 내 영향력에 대한 분석이 포함되어 있습니다.")}
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => window.open(boguSystemDoc, "_blank")}
                  style={{ marginLeft: "10px" }}
                >
                  PDF 열기
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={6} className="portfolio-card">
            <Card className="portfolio-card-view">
              <Card.Img variant="top" src={Lunia} alt="캐릭터 시스템 기획서" className="portfolio-card-img" />
              <Card.Body>
                <Card.Title>루니아원정대-캐릭터 시스템</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {renderDescription("루니아원정대 게임의 캐릭터 시스템에 관한 기획서입니다.\n캐릭터 레벨링, 능력치, 성장 시스템에 대한 상세 설계가 담겨있습니다.")}
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => window.open(characterSystemDoc, "_blank")}
                  style={{ marginLeft: "10px" }}
                >
                  PDF 열기
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={6} className="portfolio-card">
            <Card className="portfolio-card-view">
              <Card.Img variant="top" src={Lunia} alt="가챠 UI 기획서" className="portfolio-card-img" />
              <Card.Body>
                <Card.Title>루니아원정대-가챠 UI</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {renderDescription("루니아원정대 게임의 가챠 UI에 관한 기획서입니다.\n게임 내 가챠 시스템의 사용자 인터페이스 설계가 담겨있습니다.")}
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => window.open(gachaUIDoc, "_blank")}
                  style={{ marginLeft: "10px" }}
                >
                  PDF 열기
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={6} className="portfolio-card">
            <Card className="portfolio-card-view">
              <Card.Img variant="top" src={excel2yaml} alt="excel2yaml" className="portfolio-card-img" />
              <Card.Body>
                <Card.Title>업무용 툴-Excel2Yaml</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {renderDescription("엑셀 파일을 YAML 파일로 변환하는 툴입니다.\n엑셀 파일의 데이터를 쉽게 YAML 파일로 변환할 수 있도록 돕습니다.")}
                </Card.Text>
                <Button 
                  variant="primary" 
                  href="https://github.com/gomeng-dev/Excel2Yaml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub /> &nbsp;
                  GitHub
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;
