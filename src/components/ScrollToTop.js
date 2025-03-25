import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    // 타이밍 이슈를 방지하기 위해 setTimeout 사용
    setTimeout(() => {
      // 페이지 최상단으로 스크롤 (smooth 옵션 추가)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // 'smooth'로 설정하면 부드럽게 스크롤됨
      });
      
      // 추가적으로 section 요소가 있는 경우 스크롤 처리
      const sections = document.querySelectorAll('section.page-section');
      if (sections.length > 0) {
        sections[0].scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      
      console.log("스크롤 리셋됨: ", location.pathname);
    }, 100);
  }, [location.pathname, location.search, location.hash]); // 경로, 쿼리 파라미터, 해시 변경 시 모두 감지

  return null;
}

export default ScrollToTop;
