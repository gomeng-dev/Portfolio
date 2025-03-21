import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/정영훈 이력서.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeButtonStyle = {
  maxWidth: "250px",
  fontFamily: "'LINE Seed KR', sans-serif",
  fontWeight: 600,
  padding: "0.75rem 1.25rem",
  fontSize: "1.1rem"
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    
    // 윈도우 리사이즈 시 너비 업데이트
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="page-section">
      <Container fluid className="resume-section" style={{ 
        position: "relative",
        zIndex: 1,
        overflow: "auto",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        flex: "1",
        paddingBottom: "50px",
        paddingTop: "120px"
      }}>
        <Particle />
        <Row style={{ 
          justifyContent: "center", 
          position: "relative",
          zIndex: 5,
          marginTop: "20px"
        }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={resumeButtonStyle}
          >
            <AiOutlineDownload />
            &nbsp;이력서 다운로드
          </Button>
        </Row>

        <Row className="resume" style={{ 
          position: "relative", 
          zIndex: 5,
          overflow: "auto", 
          marginTop: "20px",
          marginBottom: "20px"
        }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ 
          justifyContent: "center", 
          position: "relative", 
          marginTop: "30px",
          zIndex: 5
        }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={resumeButtonStyle}
          >
            <AiOutlineDownload />
            &nbsp;이력서 다운로드
          </Button>
        </Row>
      </Container>
    </section>
  );
}

export default ResumeNew;
