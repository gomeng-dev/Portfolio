import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiUnitySmall,
} from "react-icons/di";
import {
  SiCsharp,
  SiTypescript,
  SiDocker,
  SiUnrealengine,
  SiSubversion,
  SiMicrosoftexcel,
  SiMicrosoftvisio,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
} from "react-icons/si";

function Techstack() {
  // 툴팁 렌더링 함수
  const renderTooltip = (text) => (
    <Tooltip id={`tooltip-${text.toLowerCase().replace(/\s+/g, '-')}`}>
      {text}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Python")}
        >
          <div><DiPython /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("C#")}
        >
          <div><SiCsharp /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("TypeScript")}
        >
          <div><SiTypescript /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Docker")}
        >
          <div><SiDocker /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Unity")}
        >
          <div><DiUnitySmall /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Unreal Engine")}
        >
          <div><SiUnrealengine /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Git")}
        >
          <div><DiGit /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("SVN (Subversion)")}
        >
          <div><SiSubversion /></div>
        </OverlayTrigger>
      </Col>

    </Row>
  );
}

export default Techstack;
