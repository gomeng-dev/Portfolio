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
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    // 윈도우 너비 업데이트
    const handleResize = () => setWidth(window.innerWidth);
    
    // 초기 설정
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // PDF 문서가 로드될 때 전체 페이지 수를 가져오는 함수
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="page-section" style={{ overflow: "auto", minHeight: "100vh" }}>
      <Container fluid className="resume-section" style={{ 
        position: "relative",
        zIndex: 1,
        overflow: "auto",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        flex: "1",
        paddingBottom: "50px",
        paddingTop: "120px" // 네비게이션 바 아래로 충분한 여백
      }}>
        <Particle />
        <Row style={{ 
          justifyContent: "center", 
          position: "relative",
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
          zIndex: 2,
          overflow: "auto", 
          marginTop: "20px"
        }}>
          <Document 
            file={pdf} 
            className="d-flex justify-content-center flex-column align-items-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
                  className="mb-0" // 페이지 간 여백 제거 (mb-5에서 mb-0으로 변경)
                />
              )
            )}
          </Document>
        </Row>

        <Row style={{ 
          justifyContent: "center", 
          position: "relative", 
          marginTop: "30px"
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
