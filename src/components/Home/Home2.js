import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ 
      background: 'transparent',
      paddingBottom: '30px' 
    }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              제 <b className="skyblue">소개</b>를 드리겠습니다🙌
            </h1>
            <p className="home-about-body">
            다양한 게임 개발 경험을 바탕으로 기획과 PM 업무를 수행해왔습니다💡
              <br />
              <br />
              <i>
                <b className="skyblue"> Unity, JIRA, VS Code, Excel  </b>과 같은 기술에 능숙합니다
              </i>
              <br />
              <br />
              관심 분야는 새로운 &nbsp;
              <i>
                <b className="skyblue">기술과 재밌는 시스템 기획</b> 이나 {" "}
                <b className="skyblue">
                  업무의 자동화
                </b>와 관련된 분야입니다.
              </i>
              <br />
              <br />
              가능할 때마다 <b className="skyblue">AI</b>와
              <i>
                <b className="skyblue">
                  {" "}
                  Slack 챗봇 혹은 Excel Add-in
                </b>
              </i>
              &nbsp; 을 사용하여 업무를 더욱 편리하게 해주는 툴을 만들어 사용합니다.
              <br />
              <br />예를 들면
              <i>
                <b className="skyblue"> 테이블 자동 생성 프로그램</b>이나 <b className="skyblue">이슈 알리미 챗봇</b>
              </i>
              같은걸 만들고는 합니다.
              <br />
              <br />
              여유 시간에는 게임, 게임 모드 개발, 한글화 등을 취미로 즐깁니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="아바타" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>소셜 미디어</h1>
            <p>
              <span className="skyblue">연락주세요 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gomeng-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:son2688s@naver.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/son2688s/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
