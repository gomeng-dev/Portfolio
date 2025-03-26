import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  useEffect(() => {
    // 전체 문서에 wheel 이벤트 리스너 추가
    const handleWheel = (e) => {
      // 스크롤 동작 유지
      window.scrollBy({
        top: e.deltaY,
        behavior: 'auto'
      });
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section className="page-section">
      <Container fluid className="home-section" id="home" style={{position: 'relative', zIndex: 1, paddingBottom: '0px'}}>
        <Particle style={{zIndex: 0}} />
        <Container className="home-content" style={{position: 'relative', zIndex: 2}}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontWeight: 700 }} className="heading">
                안녕하세요!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name" style={{ fontWeight: 700 }}>시스템 기획자</strong> 정영훈 입니다.
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="홈 이미지"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
