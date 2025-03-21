import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiMacos,
  SiSlack,
  SiNotion,
  SiJira,
  SiGithub,
  SiVisualstudiocode,
  SiMicrosoftexcel,
  SiMicrosoftvisio,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function Toolstack() {
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
          overlay={renderTooltip("MacOS")}
        >
          <div><SiMacos /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Cursor")}
        >
          <div><TbBrandVscode /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Slack")}
        >
          <div><SiSlack /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Fork (Git Client)")}
        >
          <div><SiGithub /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Notion")}
        >
          <div><SiNotion /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Jira")}
        >
          <div><SiJira /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Microsoft Excel")}
        >
          <div><SiMicrosoftexcel /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Microsoft Visio")}
        >
          <div><SiMicrosoftvisio /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Microsoft PowerPoint")}
        >
          <div><SiMicrosoftpowerpoint /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Microsoft Word")}
        >
          <div><SiMicrosoftword /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
