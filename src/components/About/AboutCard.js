import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요, <span className="skyblue">정영훈</span>입니다.
            <span className="skyblue"> 광주 출신, 서울</span>에서 거주합니다.
            <br />
            현재 게임 시스템 기획자로 일하고 있습니다.
            <br />
            <span className="skyblue">자동화</span>를 통하여 게으르고 편하게 일하는 것을 좋아합니다.
            <br />
            <br />
            게임 개발 외에도 제가 좋아하는 다른 활동들이 있습니다!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 게임 하기
            </li>
            <li className="about-activity">
              <ImPointRight /> 일상 자동화
            </li>
            <li className="about-activity">
              <ImPointRight /> 여행
            </li>
          </ul>

          <p style={{ color: "rgb(25, 117, 196)" }}>
            "게으르기 위해서 우선 부지런해져봐요!"{" "}
          </p>
          <footer className="blockquote-footer">정영훈</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
