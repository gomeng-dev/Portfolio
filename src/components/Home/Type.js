import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "시스템 기획자",
          "하드 게이머",
          "모드 개발자"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "typewriter-wrapper",
        cursorClassName: "typewriter-cursor",
      }}
    />
  );
}

export default Type;
