import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";

function ProjectCards(props) {
  // 개행을 위한 함수 - HTML 안전한 방식으로 줄바꿈 적용
  const renderDescription = (text) => {
    if (!text) return null;
    
    // 줄바꿈 문자로 분리하고 각 줄 사이에 <br/> 태그 삽입
    return text.split('\n').map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="카드-이미지" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {renderDescription(props.description)}
        </Card.Text>
        
        {/* GitHub 링크가 있는 경우에만 GitHub 버튼 표시 */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "블로그" : "깃허브"}
          </Button>
        )}
        
        {/* YouTube 링크가 있는 경우 YouTube 버튼 표시 */}
        {props.ytLink && (
          <Button 
            variant="danger" 
            href={props.ytLink} 
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0" }}
          >
            <BsYoutube /> &nbsp;
            {"유튜브"}
          </Button>
        )}
        
        {/* 구글 플레이스토어 링크가 있는 경우 플레이스토어 버튼 표시 */}
        {props.appLink && (
          <Button 
            variant="success" 
            href={props.appLink} 
            target="_blank"
            style={{ 
              marginLeft: (props.ghLink || props.ytLink) ? "10px" : "0",
              backgroundColor: "#689f38"
            }}
          >
            <SiGoogleplay /> &nbsp;
            {"플레이스토어"}
          </Button>
        )}
        
        {/* 데모 링크가 있고 블로그가 아닌 경우 데모 버튼 표시 */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ 
              marginLeft: "10px"
            }}
          >
            <CgWebsite /> &nbsp;
            {"데모"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
