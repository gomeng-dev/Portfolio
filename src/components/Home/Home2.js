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
              게임 업계에서 <b className="skyblue">9년</b> 동안 일해온 <b className="skyblue">시스템 기획자</b>입니다.
              <br />
              지금은 <b className="skyblue">어썸피스의 좀비고 팀</b>에서 재미있는 시스템을 만들고 있습니다.
              <br />
              <br />
              그동안 <b className="skyblue">시스템 기획</b>과 <b className="skyblue">UI/UX 기획</b>을 주로 해왔고,
              <b className="skyblue"> 몬스터 설계부터 레벨디자인, 밸런싱</b>까지 다양한 영역에도 도전했습니다.
              팀 내에서는 <b className="skyblue">툴 개발</b>과 <b className="skyblue">업무 파이프라인 개선</b>을 통해 
              모두가 더 효율적으로 일할 수 있도록 노력하고 있습니다.
              <br />
              <br />
              업무 시간 외에는 <b className="skyblue">AI 기술과 개발</b>에 관심이 많아
              취미로 개발을 해보기도 하며 이런 기술들을 실제 업무에 적용하여 생산성을 끌어올리는데 희열을 느낍니다.
              <br />
              <br />
              휴식 할 때는 직접 게임을 즐기거나, 좋아하는 모드를 한글화하는 작업을 하며 시간을 보냅니다.
              <br />
              최근에는 Escape From Tarkov 의 싱글 모드에 빠져있어, 구버전 모드를 최신 버전으로 포팅하는 작업을 하고 있습니다.
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
