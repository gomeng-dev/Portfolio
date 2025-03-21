import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/Aboutme.png";

function About() {
  return (
    <section className="page-section">
      <Container fluid className="about-section" style={{ background: 'transparent' }}>
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                저는 <strong className="skyblue">이런 사람</strong>입니다
              </h1>
              <AboutCard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
          <strong className="skyblue">기술 스택</strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            사용하는 <strong className="skyblue">툴</strong>
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </section>
  );
}

export default About;
